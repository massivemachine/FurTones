from flask import Flask, request
from keyboard import play_notes

app = Flask(__name__)

@app.post("/")
def send_to_keyboard():
    pass

app.run()