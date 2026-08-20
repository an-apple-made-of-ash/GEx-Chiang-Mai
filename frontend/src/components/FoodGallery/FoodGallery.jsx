import FoodCard from "../FoodCard/FoodCard";

import "./FoodGallery.css";


function FoodGallery({ foods, onFoodClick }) {
    if (foods.length === 0) {
        return (
            <p className="food-gallery-empty">
                No food found.
            </p>
        );
    }


    return (
        <section className="food-gallery">
            {foods.map((food) => (
                <FoodCard
                    key={food.id}
                    food={food}
                    onClick={onFoodClick}
                />
            ))}
        </section>
    );
}


export default FoodGallery;