from app import app
from models import db, User, Business, Activity, Review

print('Seeding database ... 🌱')
# Add your seed data here
with app.app_context():
    user1 = User('Babo', 'RedBull@gmail.com', '123456')
    business1 = Business('Church St Boxing', '25 Park Pl, Lower Level, New York, NY, 10007', 'This studio offers Boxing and Kickboxing classes. Shed the weight, tone up, and learn to FIGHT BACK at New York Premium, Highly Staffed Boxing Gym! Loaner gloves are available and wraps are sold for $10. Planning to use the shower facilities? Please bring a towel and any necessary toiletries.')
    business2 = Business('Rumble Boxing', '142 West St, New York, NY, 10007', 'Rumble is group fitness for the individual, and we believe that working out should be fun and effective. Rumble Boxing is an all-level, 45-minute boxing and strength training workout powered by a mega-watt sound system and custom playlists available only at Rumble. 10 rounds, 2 fists, 0 experience necessary.')
    business3 = Business('Crunch Gym', '80 Leonard St, New York, NY, 10013', 'Crunch is a high end gym chain with 400+ locations nationwide. They specialize in top of the line exercise equipment, group fitness classes, and world-class personal trainers. They want to encourage, empower and entertain you so that you continuously make fitness a big part of your routine.')
    business4 = Business('Sweat440', '80 John Street, New York, NY, 10038', 'SWEAT440 is a dynamic 40-minute workout class originating in Miami Beach’s Sunset Harbour neighborhood. SWEAT440 is designed for everyone, from the beginner to seasoned fitness fanatics looking for an effective and efficient exercise routine in only 40-minutes. ')
    business5 = Business('Bout Fight Club', '139 Fulton St, New York, NY, 10038', 'Bout Fight Club was established in 2018 to make real boxing accessible for all. Just because you may never set foot in a ring, does not mean you should not know how. Bout Fight Club believes that if you are going to box, you should do it right.')
    business6 = Business('CompleteBody', '10 Hanover Square, New York, NY, 10005', 'CompleteBody offers the best in Group classes whether your looking for HIIT programs like the very popular Circuit25, or our Ballet based Barre Fusion was designed just for you. For those looking for a low impact class to engage your core and give you better flexibility, then try out our Pilates, Yoga and Buti Yoga classes. CompleteBody also has Immersive Spin Classes and Zumba to top it all off, so check out our schedule we have a class tailored just for you.')
    business7 = Business('AK Boxing Club', '139 Fulton Street, Suite 518, New York, NY, 10038', 'From energetic group training to concentrated one-on-one sessions, Antoine’s personalized, hands-on approach will teach, motivate and leave you better every session. AK Boxing Club classes are a combination of warmups, strength and conditioning, with explosive, dedicated mitt and bag work, with focus on form and body positioning. You will punch. And of course, you will sweat!')
    business8 = Business('Jazzercise NYC', '26 Broadway 3rd floor, New York, NY, 10004', 'Are you ready for the ultimate confidence infusion? Channel your inner pop diva in the original dance party workout. Blending dance with Pilates, yoga, kickboxing and strength training, one 55-minute session can burn up to 800 calories. The results? Long, lean muscles and an undeniable mood boost.')
    business9 = Business('Barrys', '1 York St, New York, NY, 10013', 'Barry’s is the original high-energy, calorie-scorching, cardio and strength interval training workout that kicked off a boutique fitness movement. Founded in 1998, the signature Barry’s method has remained the same for over 23 years because it works; a 50-minute Barrys class can increase lean body mass and raise metabolic rate up to 15 % . Clients spend up to 25 minutes running on the treadmill and up to 25 minutes doing strength training, broken into rounds.')
    business10 = Business('Sirko Fitness', '20929 Ventura Boulevard, Los Angeles, CA, 91364', 'If you’re looking for a studio with classes that are as challenging as they are fun, Sirko Fitness is for you. All fitness levels are welcome, check out descriptions to see which class suits your needs best. They can’t wait to meet you!')
    activity1 = Activity('Cardio', 'Sweat', 10, True, 20)
    review1 = Review('Loved It!', 1, 1, 'I had a good time', 5)
    db.session.add_all([user1])
    db.session.add_all([business1, business2, business3, business4, business5, business6, business7, business8, business9, business10])
    db.session.add_all([activity1])
    db.session.add_all([review1])
    db.session.commit()
    print('Done! 🌳')
