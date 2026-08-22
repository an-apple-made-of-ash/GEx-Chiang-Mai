import csv

from app import create_app
from app.models import db
from app.models.food import Food


app = create_app()


def to_float(value):
    if value is None or value.strip() == "":
        return None

    return float(value)


def to_int(value):
    if value is None or value.strip() == "":
        return None

    return int(float(value))


def import_foods():
    with app.app_context():

        with open(
            "data/food_data.csv",
            "r",
            encoding="utf-8-sig",
            newline="",
        ) as file:

            reader = csv.DictReader(file)

            foods = []

            for row in reader:

                food = Food(
                    english_name=row["english_name"].strip(),
                    thai_name=row["thai_name"].strip() or None,
                    brand=row["brand"].strip() or None,

                    price=to_float(row["price"]),
                    serving_size=row["serving_size"].strip() or None,

                    calories=to_int(row["calories"]),
                    total_fats=to_float(row["total_fats"]),
                    saturated_fat=to_float(row["saturated_fat"]),
                    cholesterol=to_float(row["cholesterol"]),
                    protein=to_float(row["protein"]),
                    total_carbohydrates=to_float(
                        row["total_carbohydrates"]
                    ),
                    dietary_fibre=to_float(
                        row["dietary_fibre"]
                    ),
                    total_sugars=to_float(
                        row["total_sugars"]
                    ),
                    sodium=to_float(row["sodium"]),

                    image=row["image"].strip() or None,
                    category=row["category"].strip() or None,

                    ingredients=(
                        row["ingredients"].strip()
                        or None
                    ),

                    allergens=(
                        row["allergens"].strip()
                        or None
                    ),
                )

                foods.append(food)

            db.session.add_all(foods)
            db.session.commit()

            print(
                f"Successfully imported {len(foods)} foods."
            )


if __name__ == "__main__":
    import_foods()