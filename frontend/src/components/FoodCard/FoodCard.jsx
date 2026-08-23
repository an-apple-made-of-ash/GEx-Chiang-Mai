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
                        src={`/images/${food.category}/${food.image}.jpg`}
                        alt={food.english_name}
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

                <h2>{food.english_name}</h2>

                {food.thai_name && (
                    <p className="food-card-thai-name">
                        {food.thai_name}
                    </p>
                )}

                {food.price !== null && food.price !== undefined && (
                    <p className="food-card-price">
                        ฿{Number(food.price).toFixed(2)}
                    </p>
                )}
            </div>
        </article>
    );
}

export default FoodCard;