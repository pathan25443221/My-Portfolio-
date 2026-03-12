from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy import insert
from typing import Optional

from models.database import engine, chat_logs
from services.resume import ResumeService, get_resume_service
from services.openrouter import OpenRouterService, get_openrouter_service

router = APIRouter(prefix="/api", tags=["Chat"])

class ChatRequest(BaseModel):
    message: str
    session_id: str

class ChatResponse(BaseModel):
    reply: str
    session_id: str

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(
    request: ChatRequest,
    resume_svc: ResumeService = Depends(get_resume_service),
    llm_svc: OpenRouterService = Depends(get_openrouter_service)
):
    try:
        # Get Candidate Context
        full_resume_dict = resume_svc.get_all()
        candidate_name = full_resume_dict.get("name", "the developer")
        resume_text_context = resume_svc.get_formatted_text()

        # Generate Reply
        ai_reply = await llm_svc.chat(
            message=request.message,
            resume_text=resume_text_context,
            name=candidate_name
        )
        
        # Best-effort DB Logging (Fail gracefully if log fails)
        try:
            async with engine.begin() as conn:
                await conn.execute(
                    insert(chat_logs).values(
                        session_id=request.session_id,
                        user_message=request.message,
                        ai_response=ai_reply
                    )
                )
        except Exception as db_err:
            print(f"Failed to log chat to database: {db_err}")

        return ChatResponse(reply=ai_reply, session_id=request.session_id)

    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
