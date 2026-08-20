from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

    app.config.from_object("config.Config")

    CORS(
        app,
        origins=["http://localhost:5173"]
    )

    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes.food import food_bp
    app.register_blueprint(food_bp)

    return app