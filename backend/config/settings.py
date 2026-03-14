from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # --- Required --- set these as environment variables in Railway dashboard
    openrouter_api_key: str

    # --- Optional with safe defaults ---
    llm_model_name: str = "meta-llama/llama-3.1-8b-instruct"
    database_url: str = "sqlite+aiosqlite:///./chat_logs.db"
    port: int = 8000

    # Automatically loads from .env locally; env vars take precedence on Railway
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

# Instantiate once — imported everywhere via `from config.settings import settings`
settings = Settings()
