import asyncio
from services.openrouter import openrouter_service
from services.resume import resume_service

async def main():
    try:
        resume_text = resume_service.get_formatted_text()
        print("Got resume text, calling openrouter...")
        reply = await openrouter_service.chat("Hello", resume_text, "Intekhab")
        print("Reply:", reply)
    except Exception as e:
        import traceback
        traceback.print_exc()

asyncio.run(main())
