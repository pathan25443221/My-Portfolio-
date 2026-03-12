import urllib.request
import urllib.error
import json

req = urllib.request.Request(
    'http://localhost:8000/api/chat',
    data=json.dumps({"message": "Hello", "session_id": "test"}).encode('utf-8'),
    headers={'Content-Type': 'application/json'}
)

try:
    resp = urllib.request.urlopen(req)
    print("Success:", resp.read().decode())
except urllib.error.HTTPError as e:
    print("HTTPError:", e.code)
    print("Response:", e.read().decode())
except Exception as e:
    print("Other error:", e)
