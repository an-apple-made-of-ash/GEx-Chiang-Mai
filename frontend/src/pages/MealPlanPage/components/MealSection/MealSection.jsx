import "./MealSection.css";

function MealSection({
    meal,
    foods,
    nutrition,
    onAddFood,
    onRemoveFood,
    onIncreaseQuantity,
    onDecreaseQuantity,
}) {
    return (
        <section className="meal-section">
            <div className="meal-section-header">
                <div>
                    <h2>{meal}</h2>

                    {foods.length > 0 && (
                        <p className="meal-nutrition">
                            {Math.round(nutrition.calories)} kcal ·{" "}
                            {nutrition.protein.toFixed(1)} g protein ·{" "}
                            {nutrition.carbohydrates.toFixed(1)} g carbs ·{" "}
                            {nutrition.fat.toFixed(1)} g fat
                        </p>
                    )}
                </div>

                <button
                    className="add-food-button"
                    onClick={onAddFood}
                >
                    + Add Food
                </button>
            </div>

            {foods.length === 0 ? (
                <p className="empty-meal">
                    No food added yet
                </p>
            ) : (
                <div className="meal-food-list">
                    {foods.map((item, index) => (
                        <div
                            className="meal-food-item"
                            key={`${item.food.id}-${index}`}
                        >
                            <div className="meal-food-info">
                                <h3>
                                    {item.food.english_name}
                                </h3>

                                {item.food.thai_name && (
                                    <p className="thai-name">
                                        {item.food.thai_name}
                                    </p>
                                )}

                                <p className="food-nutrition">
                                    {Math.round(
                                        Number(
                                            item.food.calories || 0
                                        ) * item.quantity
                                    )}{" "}
                                    kcal ·{" "}
                                    {(
                                        Number(
                                            item.food.protein || 0
                                        ) * item.quantity
                                    ).toFixed(1)}{" "}
                                    g protein ·{" "}
                                    {(
                                        Number(
                                            item.food
                                                .total_carbohydrates || 0
                                        ) * item.quantity
                                    ).toFixed(1)}{" "}
                                    g carbs ·{" "}
                                    {(
                                        Number(
                                            item.food.total_fats || 0
                                        ) * item.quantity
                                    ).toFixed(1)}{" "}
                                    g fat
                                </p>
                            </div>

                            <div className="quantity-controls">
                                <button
                                    onClick={() =>
                                        onDecreaseQuantity(index)
                                    }
                                >
                                    −
                                </button>

                                <span>
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        onIncreaseQuantity(index)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="remove-food-button"
                                onClick={() =>
                                    onRemoveFood(index)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MealSection;