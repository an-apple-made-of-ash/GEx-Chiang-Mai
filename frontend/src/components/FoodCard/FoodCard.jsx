import "./FoodCard.css";


function FoodCard({ food, onClick }) {
    return (
        <article
            className="food-card"
            onClick={() => onClick(food)}
        >
            <div className="food-card-image">
                {food.image ? (
                    <img
                        src={food.image}
                        alt={food.name}
                    />
                ) : (
                    <div className="food-card-placeholder">
                        No image
                    </div>
                )}
            </div>

            <div className="food-card-content">
                <p className="food-card-category">
                    {food.category}
                </p>

                <h2>{food.name}</h2>

                <p className="food-card-description">
                    {food.description}
                </p>
            </div>
        </article>
    );
}


export default FoodCard;