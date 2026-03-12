import httpx
from config.settings import settings

SYSTEM_PROMPT_TEMPLATE = """You are an AI assistant embedded in {name}'s personal portfolio website.
Your sole purpose is to warmly and professionally answer visitors' questions about {name}.

CRITICAL RULES:
1. NO FOURTH WALL BREAKS: NEVER mention your data sources. NEVER use words like "JSON", "ai_context", "fields", "resume", "portfolio", "context", or "data".
2. NO ATTRIBUTIONS: NEVER start a sentence with "According to...", "Based on...", "His profile says...", or "I can see that...". Speak directly and confidently. Act as if you naturally know this information firsthand because you work with him.
3. USE INSIDER KNOWLEDGE: Read all the provided information carefully.  his work style, and his behind-the-scenes project thoughts. Use this information natively and conversationally.
4. When a visitor asks about his hobbies, DO NOT say they aren't listed. Look at the provided background knowledge and talk about them!
5. THE PIVOT RULE: If a user asks a question that is TRULY not covered in the data below, gracefully pivot. Tell them you don't have that specific detail, but highly encourage them to reach out to {name} via the contact section to chat about it.
6. Do not reveal that you are an AI unless directly asked. Keep answers concise, friendly, and engaging.

--- PORTFOLIO & BACKGROUND KNOWLEDGE ---
{resume_text}"""

class OpenRouterService:
    def __init__(self):
        self.api_key = settings.openrouter_api_key
        self.model = settings.llm_model_name
        self.base_url = "https://openrouter.ai/api/v1"

    def _build_system_prompt(self, resume_text: str, name: str) -> str:
        """Constructs the rigid, rules-based system prompt."""
        return SYSTEM_PROMPT_TEMPLATE.format(name=name, resume_text=resume_text)

    def _build_headers(self) -> dict:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    def _build_payload(self, message: str, system_prompt: str) -> dict:
        return {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": message}
            ]
        }

    async def chat(self, message: str, resume_text: str, name: str) -> str:
        system_prompt = self._build_system_prompt(resume_text, name)
        headers = self._build_headers()
        payload = self._build_payload(message, system_prompt)

        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f"{self.base_url}/chat/completions",
                json=payload,
                headers=headers
            )
            # Raise an HTTPException if the status code is 4xx or 5xx
            response.raise_for_status()
            
            data = response.json()
            if not data.get("choices") or not isinstance(data["choices"], list):
                raise ValueError("Invalid response format from OpenRouter API")
                
            return data["choices"][0]["message"]["content"].strip()

openrouter_service = OpenRouterService()

def get_openrouter_service() -> OpenRouterService:
    """Dependency injection provider."""
    return openrouter_service
