import { useMemo, useState } from "react";

import "./AddFoodModal.css";

function AddFoodModal({
    meal,
    foods = [],
    onAddFood,
    onClose,
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState("All");

    /*
     * Get unique categories
     */
    const categories = useMemo(() => {
        const uniqueCategories = new Set();

        foods.forEach((food) => {
            if (food.category) {
                uniqueCategories.add(food.category);
            }
        });

        return [...uniqueCategories].sort();
    }, [foods]);

    /*
     * Filter foods
     */
    const filteredFoods = useMemo(() => {
        const search = searchTerm
            .trim()
            .toLowerCase();

        return foods.filter((food) => {
            const matchesSearch =
                !search ||
                food.english_name
                    ?.toLowerCase()
                    .includes(search) ||
                food.thai_name
                    ?.toLowerCase()
                    .includes(search);

            const matchesCategory =
                selectedCategory === "All" ||
                food.category === selectedCategory;

            return (
                matchesSearch &&
                matchesCategory
            );
        });
    }, [
        foods,
        searchTerm,
        selectedCategory,
    ]);

    return (
        <div className="food-selection-overlay">
            <div className="food-selection-modal">

                {/* Header */}

                <div className="food-selection-header">
                    <h2>
                        Add Food to {meal}
                    </h2>

                    <button
                        className="close-modal"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Search and Filter */}

                <div className="food-selection-controls">
                    <input
                        type="text"
                        className="food-search"
                        placeholder="Search food..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(
                                event.target.value
                            )
                        }
                    />

                    <div className="category-filter">
                        <button
                            className={
                                selectedCategory === "All"
                                    ? "category-button active"
                                    : "category-button"
                            }
                            onClick={() =>
                                setSelectedCategory("All")
                            }
                        >
                            All
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category}
                                className={
                                    selectedCategory === category
                                        ? "category-button active"
                                        : "category-button"
                                }
                                onClick={() =>
                                    setSelectedCategory(category)
                                }
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Food List */}

                <div className="food-selection-list">
                    {filteredFoods.length === 0 ? (
                        <p className="no-food-found">
                            No food found.
                        </p>
                    ) : (
                        filteredFoods.map((food) => (
                            <button
                                className="food-selection-item"
                                key={food.id}
                                onClick={() =>
                                    onAddFood(food)
                                }
                            >
                                {food.image ? (
                                    <img
                                        src={`/images/${food.category}/${food.image}.jpg`}
                                        alt={food.english_name}
                                    />
                                ) : (
                                    <div className="food-selection-placeholder">
                                        No image
                                    </div>
                                )}

                                <div className="food-selection-info">
                                    <h3>
                                        {food.english_name}
                                    </h3>

                                    {food.thai_name && (
                                        <p>
                                            {food.thai_name}
                                        </p>
                                    )}

                                    <span>
                                        {food.calories || 0} kcal
                                    </span>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddFoodModal;