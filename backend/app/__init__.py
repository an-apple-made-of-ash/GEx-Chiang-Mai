from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate

from config import Config
from .models import db


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)

    Migrate(app, db)

    # Import models so Flask-Migrate can detect them
    from .models.food import Food

    # Register routes
    from .routes.food import food_bp

    app.register_blueprint(
        food_bp,
        url_prefix="/api/foods",
    )

    return app