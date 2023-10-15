from flask import Flask, request


app = Flask(__name__)


@app.get("/")
def home():
    return "Hello World"


@app.post("/api/login")
def check_user():
    data = request.get_json()
    username = data["username"]
    password = data["password"]


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
