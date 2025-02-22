from flask import Flask, request

app = Flask(__name__)

@app.post("/")
def play_notes():
    pass

app.run()