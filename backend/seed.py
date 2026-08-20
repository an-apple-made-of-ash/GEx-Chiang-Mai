from app import create_app, db
from app.models.food import Food


app = create_app()


def seed_foods():
    db.session.query(Food).delete()

    foods = [
        Food(
            name="Khao Soi",
            description="Northern Thai curry noodle soup.",
            image="/images/khao-soi.jpg",
            category="Noodles",
            calories=650,
            protein=25,
            carbohydrates=70,
            fat=30,
            ingredients="Egg noodles, curry paste, coconut milk, chicken, pickled mustard greens",
            allergens="Gluten, dairy",
        ),

    ]

    db.session.add_all(foods)
    db.session.commit()

    print("Food seeded successfully")


if __name__ == "__main__":
    with app.app_context():
        seed_foods()