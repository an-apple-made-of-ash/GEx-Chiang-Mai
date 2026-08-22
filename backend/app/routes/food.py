from flask import Blueprint, jsonify

from app.models.food import Food


food_bp = Blueprint("food", __name__, url_prefix="/api/foods")


def serialize_food(food):
    return {
        "id": food.id,

        "english_name": food.english_name,
        "thai_name": food.thai_name,
        "brand": food.brand,

        "price": food.price,
        "serving_size": food.serving_size,

        "calories": food.calories,
        "total_fats": food.total_fats,
        "saturated_fat": food.saturated_fat,
        "cholesterol": food.cholesterol,
        "protein": food.protein,
        "total_carbohydrates": food.total_carbohydrates,
        "dietary_fibre": food.dietary_fibre,
        "total_sugars": food.total_sugars,
        "sodium": food.sodium,

        "image": food.image,
        "category": food.category,

        "ingredients": food.ingredients,
        "allergens": food.allergens,

        "created_at": (
            food.created_at.isoformat()
            if food.created_at
            else None
        ),
    }


@food_bp.route("/", methods=["GET"])
def get_foods():
    foods = Food.query.order_by(
        Food.created_at.desc()
    ).all()

    return jsonify([
        serialize_food(food)
        for food in foods
    ])


@food_bp.route("/<int:food_id>", methods=["GET"])
def get_food(food_id):
    food = Food.query.get_or_404(food_id)

    return jsonify(
        serialize_food(food)
    )