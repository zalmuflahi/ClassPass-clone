from app import app
from models import db, Business, User

def run_seeds():
    print ('seeding database ....')
    #add your seed data here
    with app.app_context():
        
        db.session.add()
        db.session.commit()
        print('done')

run_seeds()
