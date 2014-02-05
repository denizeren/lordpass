from flask import Flask
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app)

@app.route('/')
def flypass():
    return render_template('index.html')
