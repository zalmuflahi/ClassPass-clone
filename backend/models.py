from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.orm import relationship

db = SQLAlchemy()
migrate = Migrate(db)

# User Class here


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    activities = relationship("Activity", secondary="businesses")

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    def __repr__(self):
        return '<User %r>' % self.username

# Business Class here


class Business(db.Model):
    __tablename__ = 'businesses'
    id = db.Column(db.Integer, primary_key=True)
    businessname = db.Column(db.String(20))
    address = db.Column(db.String(120))
    info = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    activities = relationship("Activity", secondary="users")

    def __init__(self, businessname, address, info):
        self.businessname = businessname
        self.address = address
        self.info = info

    def to_dict(self):
        return {
            'id': self.id,
            'businessname': self.businessname,
            'address': self.address,
            'info': self.info
        }

    def __repr__(self):
        return '<Business %r>' % self.businessname


# Classes class? :p
class Activity(db.Model):
    __tablename__ = 'activities'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    type = db.Column(db.String(80))
    description = db.Column(db.String(120))
    credit_cost = db.Column(db.Integer)
    availability = db.Column(db.Boolean, default=False, server_default="false")
    capacity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    user = relationship(User)
    business = relationship(Business)

    def __init__(self, type, description, credit_cost, availability, capacity):
        self.type = type
        self.description = description
        self.credit_cost = credit_cost
        self.availability = availability
        self.capacity = capacity

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'description': self.description,
            'credit_cost': self.credit_cost,
            'availability': self.availability,
            'capacity': self.capacity
        }

    def __repr__(self):
        return '<Activity %r>' % self.type

# Reviews here


class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True, nullable=False)
    content = db.Column(db.String(120), unique=True, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, title, content, rating):
        self.title = title
        self.content = content
        self.rating = rating

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'rating': self.rating
        }

    def __repr__(self):
        return '<User %r>' % self.username
