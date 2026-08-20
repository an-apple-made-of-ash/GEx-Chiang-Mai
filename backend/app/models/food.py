from datetime import datetime

from app import db


class Food(db.Model):
    __tablename__ = "foods"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(50), nullable=True)
    calories = db.Column(db.Integer, nullable=True)
    protein = db.Column(db.Float, nullable=True)
    carbohydrates = db.Column(db.Float, nullable=True)
    fat = db.Column(db.Float, nullable=True)
    ingredients = db.Column(db.Text, nullable=True)
    allergens = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)