from flask import Flask, jsonify, request
import joblib
import numpy as np
import keras
from keras.preprocessing.image import load_img, img_to_array
from keras.applications.vgg19 import preprocess_input, decode_predictions
import numpy as np
import user
import cv2

import cohere
import os
from PIL import Image


app = Flask(__name__)

# Our image classification model
model = keras.models.load_model("models/my_model.keras")

# Our user instance (for demo sake, for a final product we would aim to support multiple users)
usr = user.User(True)  # Assume user has already paid


# Function to pre-process the image
def preprocess_image(image):
    img = img_to_array(image)
    img = img.reshape(1, img.shape[0], img.shape[1], img.shape[2])
    img = preprocess_input(img)

    return img


# Function (implements Cohere) to generate advice on proper recycling, specific to the object's material
cohere_api_key = os.environ.get("COHERE_API_KEY_TWO")


def generate_advice(classified):
    co = cohere.Client(cohere_api_key)
    prompt = (
        "Give me an ordered list of under 3 steps on how to recycle my "
        + classified
        + "waste. Limit to one short sentence each point."
    )

    response = co.generate(
        model="command-nightly", prompt=prompt, max_tokens=300, temperature=0.2
    )  # We do not want too many variations on how to properly recycle
    print(response)

    return response


"""------------------API routes-----------------------"""


@app.get("/")
def home():
    return jsonify({"msg": "Hello World"})


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "bob" and password == "joe":
        return jsonify({"message": "Login successful"}), 200

    return jsonify({"message": "Invalid username or password"}), 401


# once the picture is taken, call this API endpoint
@app.route("/predict", methods=["POST"])
def predict():
    try:
        
        image = request.files['photo']
        image_file = Image.open(image)
        image_file.show()
        if image_file:
            # image = load_img(
            #     image_file,
            #     target_size=(224, 224),
            # )
            print(image_file)
            image_file = np.array(image_file)
            image = cv2.resize(image_file, (224, 224))
            preprocessed_image = preprocess_image(image)

            print("image preprocessed")

            # Make a prediction using the model
            prediction = model.predict(preprocessed_image)
            class_names = ["cardboard", "glass", "metal", "paper", "plastic", "trash"]
            class_index = np.argmax(prediction)

            class_name = class_names[class_index]
            certainty = prediction[0][class_index] * 100
            print(class_name, certainty)

            # return jsonify({"type": class_name, "certainty": certainty})
    except Exception as e:
        return jsonify({"error": str(e)})

    usr.incrementRecycleCount()
    # We want to send the proper recycling advice back to the frontend to be displayed
    # return jsonify({"cohere": generate_advice(class_name)})

    return jsonify({"cohere": class_name})


# User endpoints
@app.route("/user/progress", methods=["GET"])
def userProgress():
    return jsonify({"progress": usr.getProgress()})


@app.route("/user/getrecycle", methods=["GET"])
def recycleCount():
    return jsonify({"recycledcount": usr.getRecycledCount()})


@app.route("/user/gettokens", methods=["GET"])
def calculateTokens():
    return jsonify({"tokens": usr.calculateTokens()})


# Testing only
@app.route("/increment", methods=["GET"])
def incrementTest():
    usr.incrementRecycleCount()
    return jsonify(
        {
            "tokens": usr.calculateTokens(),
            "recycled-count": usr.getRecycledCount(),
            "progress": usr.getProgress(),
        }
    )


if __name__ == "__main__":
    app.run(debug=True, host="192.168.137.4")
    # generate_advice("plastic")
