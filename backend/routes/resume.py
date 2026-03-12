from fastapi import APIRouter, Depends
from services.resume import ResumeService, get_resume_service

router = APIRouter(prefix="/api", tags=["Resume"])

@router.get("/resume")
async def get_resume(resume_svc: ResumeService = Depends(get_resume_service)):
    """Serves the raw structured JSON representation of the candidate's portfolio."""
    return resume_svc.get_all()

@router.get("/health")
async def health_check():
    """Uptime endpoint to verify backend service status."""
    return {"status": "healthy"}
