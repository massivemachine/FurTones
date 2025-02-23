from flask import Flask, request, make_response, render_template
from keyboard import play_notes

app = Flask(__name__, template_folder=".",static_folder=".")

@app.get("/")
def render_app():
    return make_response("index.html")

@app.post("/")
def send_to_keyboard():
    note_array = request.get_json()
    print(note_array)
    #play_notes(note_array)

@app.post("/stop")
def halt_playing():
    pass