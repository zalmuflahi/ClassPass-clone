from flask import Flask

app = Flask(__name__)

@app.route("/")
def home_page():
    return "<h1>ClassPass</h1>"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port="3001")
