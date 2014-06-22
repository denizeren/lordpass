from flask import Flask, render_template
from werkzeug.contrib.fixers import ProxyFix
from flask_sslify import SSLify
 
app = Flask(__name__)

# SSL forcing for heroku
sslify = SSLify(app)

@app.route('/')
def lordpass():
    return render_template('index.html')

@app.route('/howitworks')
def how():
    return render_template('how.html')

app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == '__main__':
    app.run()
