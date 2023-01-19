import os
from flask import Flask, send_file, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Business, Activity, Review
import platform

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

# homepage route


@app.get('/')
def home():
    return send_file('index.html')

# get all users in list format


@app.get('/users')
def all_users():
    users = User.query.all()
    return jsonify({'users': [users.to_dict() for users in users]})

# get an user by its ID number


@app.get('/users/<int:id>')
def show(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.to_dict2())
    else:
        return {}, 404

# Create a new user by POST request


@app.post('/users')
def users():
    data = request.json
    user = User(data['username'], data['email'], data['password'])
    print(data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

# Delete an user by its ID number


@app.delete('/users/<int:id>')
def destroy(id):
    user = User.query.get(id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return {'success': 202}

#Method to update user
@app.patch('/users/<int:id>')
def update_user(id):
    user = User.query.get_or_404(id)
    user.username = request.json['username']
    user.email = request.json['email']
    user.password = request.json['password']
    db.session.commit()
    return jsonify(user.to_dict()), 201



# Get a list of all businesses


@app.get('/business')
def all_businesses():
    business = Business.query.all()
    return jsonify({'businesses': [business.to_dict() for business in business]})

# Get one business by its id


@app.get('/business/<int:id>')
def show_business(id):
    business = Business.query.get(id)
    if business:
        return jsonify(business.to_dict2())
    else:
        return {}, 404

# Create a new business object


@app.post('/business')
def business():
    data = request.json
    business = Business(data['businessname'], data['address'], data['info'])
    print(data)
    db.session.add(business)
    db.session.commit()
    return jsonify(business.to_dict()), 201


@app.delete('/business/<int:id>')
def delete_business(id):
    business = Business.query.get(id)
    if business:
        db.session.delete(business)
        db.session.commit()
        return {'success': 202}


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3000))

# Get all the activities info


@app.get('/activities')
def all_activities():
    activity = Activity.query.all()
    return jsonify({'activities': [activity.to_dict() for activity in activity]})

# Create a new activity by POST request
#make sure to post as raw in postmate, otherwise it doesn't work
@app.post('/activities')
def activity():
    data = request.json
    activity = Activity(data['type'], data['description'],
                        data['credit_cost'], data['availability'], data['capacity'])
    print(data)
    db.session.add(activity)
    db.session.commit()
    return jsonify(activity.to_dict()), 201

# get an activity by its ID number


@app.get('/activities/<int:id>')
def show_activities(id):
    activity = Activity.query.get(id)
    if review:
        return jsonify(activity.to_dict())
    else:
        return {}, 404

# Get all the reviews info


@app.get('/reviews')
def all_reviews():
    review = Review.query.all()
    return jsonify({'Reviews': [review.to_dict() for review in review]})

# Create a new activity by POST request


@app.post('/reviews')
def review():
    data = request.json
    review = Review(data['title'], data['content'], data['rating'])
    print(data)
    db.session.add(review)
    db.session.commit()
    return jsonify(review.to_dict()), 201

# get an review by its ID number


@app.get('/reviews/<int:id>')
def show_review(id):
    review = Review.query.get(id)
    if review:
        return jsonify(review.to_dict())
    else:
        return {}, 404
