# import requests

# BASE = "http://127.0.0.1:5000/"

# response = requests.put(BASE + "authenticate/1", {"username": "ben"})
# print(response.json())

import keras
import cv2
from keras.preprocessing.image import load_img, img_to_array
from keras.applications.vgg19 import preprocess_input, decode_predictions
import numpy as np

class_names = ["cardboard", "glass", "metal", "paper", "plastic", "trash"]

reconstruct = keras.models.load_model(
    "C:\Code\PlanetPal\planetpal-backend\models\my_model.keras"
)

img = load_img(
    "C:/Code/PlanetPal/planetpal-backend/assets/test2.jpg",
    target_size=(224, 224),
)
img = img_to_array(img)
img = img.reshape(1, img.shape[0], img.shape[1], img.shape[2])

img = preprocess_input(img)

res = reconstruct.predict(img)

class_index = np.argmax(res)  # Find the index of the class with the highest probability
class_name = class_names[class_index]  # Replace with your actual class names

certainty = res[0][class_index] * 100  # Probability of the predicted class

print(class_name, certainty)


# img = cv2.imread(
#     "C:\Code\PlanetPal\planetpal-backend\models\Garbage classification\Garbage classification\paper\paper2.jpg"
# )
# cv2.imshow("Image1", img)
# print(img)
# img = cv2.resize(img, (224, 224), interpolation=cv2.INTER_AREA)
# cv2.imshow("Image2", img)
# cv2.waitKey(0)
# res = reconstruct.predict(img)
# print(res)
