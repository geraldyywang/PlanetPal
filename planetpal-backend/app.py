from flask import Flask, jsonify, request
import joblib
import numpy as np
from PIL import Image

import cohere
import os


app = Flask(__name__)

# Pre-trained image classification model
# model = joblib.load("models\model_joblib.pkl")

# Function to pre-process the image
def preprocess_image(image):
    pass

# Function (implements Cohere) to generate advice on proper recycling, specific to the object's material
cohere_api_key=os.environ.get("COHERE_API_KEY")
def generate_advice(classified):
    co = cohere.Client(cohere_api_key)
    prompt = "Give me an ordered list of under 3 steps on how to recycle my " + classified + "waste. Limit to one short sentence each point."

    response = co.generate(  
        model='command-nightly',  
        prompt = prompt,  
        max_tokens = 300,
        temperature=0.2) # We do not want too many variations on how to properly recycle 
    print(response)

    return response.generations[0].text


"""------------------API routes-----------------------"""

@app.get("/")
def home():
    return "Hello World"


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "bob" and password == "joe":
        return jsonify({"message": "Login successful"}), 200

    return jsonify({"message": "Invalid username or password"}), 401


# once the picture is taken, call this API endpoint
@app.route(
    "/predict", methods=["POST"]
)
def predict():
    
    try:
        image_file = request.files['image']
        if image_file:
            image = Image.open(image_file)
            preprocessed_image = preprocess_image(image)

             # Make a prediction using the model
            prediction = model.predict()
            
            # Assuming you have a list of class labels, get the most likely class
            class_labels = ["cardboard", "glass", "metal", "paper", "plastic", "trash"]  # Replace with your actual class labels
            predicted_class = class_labels[np.argmax(prediction)]
    except Exception as e:
        return jsonify({"error": str(e)})
    
    # We want to send the proper recycling advice back to the frontend to be displayed
    generate_advice(predicted_class)

# class UserController(Resource):
#     def get(self):
#         args = user_login_args.parse_args()
#         return {"data": args}

#     def put(self, uid):
#         args = user_login_args.parse_args()
#         return {uid: args}


# api.add_resource(UserController, "/authenticate/<int:uid>")

if __name__ == "__main__":
    # app.run(debug=True)
    generate_advice("plastic")
