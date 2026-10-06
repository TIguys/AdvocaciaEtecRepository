import json
import urllib.request

payload = json.dumps({"message": "Teste de integração do assistente jurídico"}).encode()
req = urllib.request.Request(
    "http://127.0.0.1:8765/api/ai",
    data=payload,
    headers={"Content-Type": "application/json"},
)
with urllib.request.urlopen(req, timeout=60) as response:
    print(response.status)
    print(response.read().decode("utf-8"))
