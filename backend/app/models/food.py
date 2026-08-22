from models import db
from datetime import datetime


class Food(db.Model):
    __tablename__ = "foods"

    id = db.Column(db.Integer, primary_key=True,)

    # Basic information
    english_name = db.Column(db.String(150), nullable=False,)
    thai_name = db.Column(db.String(150), nullable=True,)
    brand = db.Column(db.String(150), nullable=True,)
    category = db.Column(db.String(100), nullable=True,)
    price = db.Column(db.Float, nullable=True,)
    serving_size = db.Column(db.String(100), nullable=True,)
    image = db.Column(db.String(255), nullable=True,)

    # Nutrition information
    calories = db.Column(db.Integer, nullable=True,)
    total_fats = db.Column(db.Float, nullable=True,)
    saturated_fat = db.Column(db.Float, nullable=True,)
    cholesterol = db.Column(db.Float, nullable=True,)
    protein = db.Column(db.Float, nullable=True,)
    total_carbohydrates = db.Column(db.Float, nullable=True,)
    dietary_fibre = db.Column(db.Float, nullable=True,)
    total_sugars = db.Column(db.Float, nullable=True,)
    sodium = db.Column(db.Float, nullable=True,)

    # Additional information
    ingredients = db.Column(db.Text, nullable=True,)
    allergens = db.Column(db.Text, nullable=True,)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False,)