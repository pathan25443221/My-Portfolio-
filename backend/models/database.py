import ssl
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import MetaData, Table, Column, Integer, String, Text, DateTime, func
from config.settings import settings

# If using remote Postgres DB, enforce SSL. SQLite doesn't need/want it.
engine_kwargs = {"pool_pre_ping": True}
if "sslmode=require" in settings.database_url:
    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = False
    ssl_context.verify_mode = ssl.CERT_NONE
    engine_kwargs["connect_args"] = {"ssl": ssl_context}

engine = create_async_engine(settings.database_url, **engine_kwargs)
metadata = MetaData()

chat_logs = Table(
    "chat_logs",
    metadata,
    Column("id", Integer, primary_key=True, autoincrement=True),
    Column("session_id", String(36), index=True, nullable=False),
    Column("user_message", Text, nullable=False),
    Column("ai_response", Text, nullable=False),
    Column("created_at", DateTime(timezone=True), server_default=func.now())
)

async def create_tables():
    """
    Creates the configured tables asynchronously.
    Should be called during FastAPI app lifespan startup.
    """
    async with engine.begin() as conn:
        await conn.run_sync(metadata.create_all)
