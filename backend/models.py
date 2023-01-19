from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.orm import relationship

db = SQLAlchemy()
migrate = Migrate(db)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    businesses = relationship("Business", overlaps="businesses", secondary="activities")

    def __init__(self, name, email):
        self.name = name
        self.email = email
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }

    def to_dict2(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'activities': [activity.to_dict() for activity in Activity.query.filter_by(user_id=self.id)],
            'reviews': [reviews.to_dict() for reviews in Review.query.filter_by(user_id=self.id)],
            'credits': [credit.to_dict() for credit in Credit.query.filter_by(user_id=self.id)]
        }

    def __repr__(self):
        return '<User %r>' % self.username

class Business(db.Model):
    __tablename__ = 'businesses'
    id = db.Column(db.Integer, primary_key=True)
    businessname = db.Column(db.String(20))
    address = db.Column(db.String(120))
    info = db.Column(db.String(200))
    picture = db.Column(db.String(500))
    neighborhood = db.Column(db.String(30))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    users = relationship("User", overlaps="businesses", secondary="activities")
    def __init__(self, businessname, address, info, picture, neighborhood):
        self.businessname = businessname
        self.address = address
        self.info = info
        self.picture = picture
        self.neighborhood = neighborhood

    def to_dict(self):
        return {
            'id': self.id,
            'businessname': self.businessname,
            'address': self.address,
            'info': self.info,
            'picture': self.picture,
            'neighborhood': self.neighborhood
        }

    def to_dict2(self):
        return {
            'id': self.id,
            'businessname': self.businessname,
            'address': self.address,
            'info': self.info,
            'picture': self.picture,
            'neighborhood': self.neighborhood,
            'activities': [activity.to_dict() for activity in Activity.query.filter_by(business_id=self.id)],
            'reviews': [reviews.to_dict() for reviews in Review.query.filter_by(business_id=self.id)]
        }

    def __repr__(self):
        return '<Business %r>' % self.businessname

class Activity(db.Model):
    __tablename__ = 'activities'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    type = db.Column(db.String(80))
    description = db.Column(db.String(120))
    credit_cost = db.Column(db.Integer)
    availability = db.Column(db.Boolean, default=False, server_default="false")
    capacity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    user = relationship(User, overlaps="businesses,users")
    business = relationship(Business, overlaps="businesses, users")

    def __init__(self,user_id, business_id, type, description, credit_cost, availability, capacity):
        self.user_id = user_id
        self.business_id = business_id
        self.type = type
        self.description = description
        self.credit_cost = credit_cost
        self.availability = availability
        self.capacity = capacity

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'business_id': self.business_id,
            'type': self.type,
            'description': self.description,
            'credit_cost': self.credit_cost,
            'availability': self.availability,
            'capacity': self.capacity
        }

    def __repr__(self):
        return '<Activity %r>' % self.type

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    title = db.Column(db.String(80), unique=True, nullable=False)
    content = db.Column(db.String(120), unique=True, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, user_id, business_id, title, content, rating):
        self.user_id = user_id
        self.business_id = business_id
        self.title = title
        self.content = content
        self.rating = rating

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'business_id': self.business_id,
            'title': self.title,
            'content': self.content,
            'rating': self.rating
        }

    def __repr__(self):
        return '<Review %r>' % self.title

class Credit(db.Model):
    __tablename__ = 'credits'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    amount = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, amount, user_id, business_id):
        self.amount = amount
        self.user_id = user_id
        self.business_id = business_id

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'business_id': self.business_id,
            'amount': self.amount
        }