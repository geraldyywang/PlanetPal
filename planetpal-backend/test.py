# import requests

# BASE = "http://127.0.0.1:5000/"

# response = requests.put(BASE + "authenticate/1", {"username": "ben"})
# print(response.json())

import joblib

model = joblib.load("models/model_joblib.pkl")
print(model.predict("assets/test1.jpg"))
