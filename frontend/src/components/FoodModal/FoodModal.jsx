import "./FoodModal.css";


function FoodModal({ food, onClose }) {
    if (!food) {
        return null;
    }


    return (
        <div className="modal-overlay" onClick={onClose}>
        <div
            className="food-modal"
            onClick={(e) => e.stopPropagation()}
        >
            <button className="modal-close" onClick={onClose}>
            ×
            </button>

            <div className="food-modal-content">

            <img
                src={`/images/${food.category}/${food.image}.jpg`}
                alt={food.english_name}
                className="food-modal-image"
            />

            <h2>{food.english_name}</h2>

            {food.thai_name && (
                <p className="thai-name">{food.thai_name}</p>
            )}

            {food.brand && (
                <p className="food-brand">{food.brand}</p>
            )}

            {/* Your existing food information */}

            <div className="nutrition-section">
                <h3>Nutrition Information</h3>

                <div className="nutrition-row">
                <span>Serving Size</span>
                <span>{food.serving_size || "-"}</span>
                </div>

                <div className="nutrition-row">
                <span>Calories</span>
                <span>{food.calories ?? "-"} kcal</span>
                </div>

                <div className="nutrition-row">
                <span>Total Fat</span>
                <span>{food.total_fats ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Saturated Fat</span>
                <span>{food.saturated_fat ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Cholesterol</span>
                <span>{food.cholesterol ?? "-"} mg</span>
                </div>

                <div className="nutrition-row">
                <span>Protein</span>
                <span>{food.protein ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Total Carbohydrates</span>
                <span>{food.total_carbohydrates ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Dietary Fibre</span>
                <span>{food.dietary_fibre ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Total Sugars</span>
                <span>{food.total_sugars ?? "-"} g</span>
                </div>

                <div className="nutrition-row">
                <span>Sodium</span>
                <span>{food.sodium ?? "-"} mg</span>
                </div>
            </div>

            {/* Ingredients */}
            {food.ingredients && (
                <div className="food-section">
                <h3>Ingredients</h3>
                <p>{food.ingredients}</p>
                </div>
            )}

            {/* Allergens */}
            {food.allergens && (
                <div className="food-section">
                <h3>Allergens</h3>
                <p>{food.allergens}</p>
                </div>
            )}

            </div>
        </div>
        </div>                                                
    );
}


export default FoodModal;