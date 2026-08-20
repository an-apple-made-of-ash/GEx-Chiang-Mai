import "./FoodModal.css";


function FoodModal({ food, onClose }) {
    if (!food) {
        return null;
    }


    return (
        <div
            className="food-modal-overlay"
            onClick={onClose}
        >
            <div
                className="food-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                {/* Close button */}

                <button
                    className="food-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <span className="close-icon">
                        <span className="close-line close-line-one" />
                        <span className="close-line close-line-two" />
                    </span>
                </button>


                {/* Image */}

                <div className="food-modal-image">
                    {food.image ? (
                        <img
                            src={food.image}
                            alt={food.name}
                        />
                    ) : (
                        <div className="food-modal-placeholder">
                            No image
                        </div>
                    )}
                </div>


                {/* Content */}

                <div className="food-modal-content">

                    <p className="food-modal-category">
                        {food.category}
                    </p>

                    <h2>
                        {food.name}
                    </h2>

                    <p className="food-modal-description">
                        {food.description}
                    </p>


                    {/* Ingredients */}

                    {food.ingredients && (
                        <section className="food-modal-section">

                            <h3>
                                Ingredients
                            </h3>

                            <p>
                                {food.ingredients}
                            </p>

                        </section>
                    )}


                    {/* Allergens */}

                    {food.allergens && (
                        <section className="food-modal-section">

                            <h3>
                                Allergens
                            </h3>

                            <p>
                                {food.allergens}
                            </p>

                        </section>
                    )}


                    {/* Nutrition */}

                    <section className="food-modal-section">

                        <h3>
                            Nutrition
                        </h3>

                        <div className="nutrition-grid">

                            <div>
                                <strong>
                                    {food.calories ?? "—"}
                                </strong>

                                <span>
                                    kcal
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {food.protein ?? "—"}
                                </strong>

                                <span>
                                    g protein
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {food.carbohydrates ?? "—"}
                                </strong>

                                <span>
                                    g carbs
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {food.fat ?? "—"}
                                </strong>

                                <span>
                                    g fat
                                </span>
                            </div>

                        </div>

                    </section>

                </div>

            </div>
        </div>
    );
}


export default FoodModal;