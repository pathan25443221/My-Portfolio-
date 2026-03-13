from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    openrouter_api_key: str
    llm_model_name: str = "meta-llama/llama-3.1-8b-instruct"
    database_url: str = "sqlite+aiosqlite:///./chat_logs.db"
    # Railway frontend service URL — set this env var in Railway dashboard
    frontend_url: str = "http://localhost:5173"
    
    # Automatically loads variables from the .env file
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

# Instantiate the settings so it can be imported anywhere in the app
settings = Settings()
