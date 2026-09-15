import "./NutritionSummary.css";

function NutritionSummary({ nutrition }) {
    return (
        <section className="nutrition-summary">
            <h2>Daily Nutrition</h2>

            <div className="nutrition-grid">
                <div>
                    <span>Calories</span>
                    <strong>
                        {Math.round(nutrition.calories)} kcal
                    </strong>
                </div>

                <div>
                    <span>Protein</span>
                    <strong>
                        {nutrition.protein.toFixed(1)} g
                    </strong>
                </div>

                <div>
                    <span>Carbohydrates</span>
                    <strong>
                        {nutrition.carbohydrates.toFixed(1)} g
                    </strong>
                </div>

                <div>
                    <span>Fat</span>
                    <strong>
                        {nutrition.fat.toFixed(1)} g
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default NutritionSummary;