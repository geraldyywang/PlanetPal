from flask import Flask, jsonify, request
import joblib


app = Flask(__name__)
model = joblib.load("models\model_joblib")


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


@app.route(
    "/predict",
)
def predict():
    pass


# class UserController(Resource):
#     def get(self):
#         args = user_login_args.parse_args()
#         return {"data": args}

#     def put(self, uid):
#         args = user_login_args.parse_args()
#         return {uid: args}


# api.add_resource(UserController, "/authenticate/<int:uid>")

if __name__ == "__main__":
    app.run(debug=True)
