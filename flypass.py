from flask import Flask, render_template
from flask_sslify import SSLify

app = Flask(__name__)
sslify = SSLify(app)

@app.route('/')
def flypass():
    return render_template('index.html')

@app.route('/howitworks')
def how():
    return render_template('how.html')


if __name__ == '__main__':
    app.run()
