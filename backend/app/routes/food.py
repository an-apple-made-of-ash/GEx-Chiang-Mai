from flask import Blueprint, jsonify

from app.models.food import Food


food_bp = Blueprint("food", __name__, url_prefix="/api/foods")


def serialize_food(food):
    return {
        "id": food.id,
        "name": food.name,
        "description": food.description,
        "image": food.image,
        "category": food.category,
        "calories": food.calories,
        "protein": food.protein,
        "carbohydrates": food.carbohydrates,
        "fat": food.fat,
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