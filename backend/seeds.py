from app import app
from models import db, User, Business, Activity, Review

print('Seeding database ... 🌱')
# Add your seed data here
with app.app_context():
    user1 = User('Babo', 'RedBull@gmail.com', '123456')
    business1 = Business('gym', 'newyork', 'itisgood')
    activity1 = Activity('Cardio', 'Sweat', 10, True, 20)
    review1 = Review('Loved It!', 'I had a good time', 5)
    db.session.add_all([user1])
    db.session.add_all([business1])
    db.session.add_all([activity1])
    db.session.add_all([review1])
    db.session.commit()
    print('Done! 🌳')
