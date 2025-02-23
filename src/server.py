from flask import Flask, request, make_response, render_template
from keyboard import play_notes

app = Flask(__name__, template_folder=".",static_folder="./assets")

@app.get("/")
def render_app():
    return make_response(render_template("index.html"))

@app.post("/")
def send_to_keyboard():
    note_json = request.get_json()
    note_array = note_json["played_notes"]
    print(note_array)

    #play_notes(note_array)


@app.post("/stop")
def halt_playing():
    pass