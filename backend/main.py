from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.database import create_tables
from routes import chat, resume

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Execute database setup logic on startup
    print("Initializing Database...")
    await create_tables()
    yield
    # Execute shutdown logic here if needed

app = FastAPI(lifespan=lifespan)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(chat.router)
app.include_router(resume.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
