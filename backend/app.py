import os
from flask import Flask, send_file, request, jsonify #before you even tsart using it you need to 'dir it" to see what it is when you use it
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, Business, User

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

@app.get('/')
def home():
    return send_file('index.html')

@app.post('/users')
def user():
    # pprint(dir(request))
    data = request.form
    user = User(data['username'], data['email'], data['password'])
    print(data)
    db.session.add(user)
    db.session.commit() 
    # print(request.form)
    return jsonify(user.to_dict()), 201

@app.get('/user/<int:id>')
def show(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.to_dict())
    else:
        return {}, 404


@app.post('/business')
def make_business():
    data = request.form
    business = Business(data['name'], data['email'])
    print(data)
    db.session.add(business)
    db.session.commit()
    return jsonify(business.to_dict()), 201

@app.route('/business', methods=['GET'])
def all_businesses():
    if request.method == 'GET':
        businesses = Business.query.all()
        return jsonify({'business' : [business.to_dict() for business in businesses]})
    else: 
      return {}, 404

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3000))

