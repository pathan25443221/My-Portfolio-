import json
from pathlib import Path

class ResumeService:
    def __init__(self):
        # Resolve path to data directory properly.
        self.data_path = Path(__file__).parent.parent / "data" / "resume.json"
        self._resume_data = {}
        self._load_data()

    def _load_data(self):
        """Loads the JSON data into memory on cache initialization."""
        try:
            with open(self.data_path, "r", encoding="utf-8") as f:
                self._resume_data = json.load(f)
        except Exception as e:
            print(f"Warning: Failed to load resume JSON: {e}")
            self._resume_data = {}

    def get_all(self) -> dict:
        """Returns the parsed JSON dictionary in full."""
        return self._resume_data

    def get_formatted_text(self) -> str:
        """Returns the dictionary as a formatted string for LLM context injection."""
        return json.dumps(self._resume_data, indent=2)

# Instantiate the service once to serve as a pseudo-singleton dependency injectible.
resume_service = ResumeService()

def get_resume_service() -> ResumeService:
    """Dependency injection provider."""
    return resume_service
