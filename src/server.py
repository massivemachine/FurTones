from flask import Flask, request, make_response, render_template
from keyboard import play_notes

app = Flask(__name__, template_folder=".")

@app.get("/")
def render_app():
    return make_response(render_template("index.html"))

@app.post("/")
def send_to_keyboard():
    pass

app.run()