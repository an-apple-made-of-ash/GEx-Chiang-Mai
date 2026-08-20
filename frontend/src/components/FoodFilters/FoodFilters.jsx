import "./FoodFilters.css";


function FoodFilters({
    search,
    onSearchChange,
    categories,
    selectedCategory,
    onCategoryChange,
}) {
    return (
        <div className="food-filters">

            <div className="food-search">
                <span className="food-search-icon">
                    ⌕
                </span>

                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={search}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                />

                {search && (
                    <button
                        className="food-search-clear"
                        onClick={() => onSearchChange("")}
                    >
                        ×
                    </button>
                )}
            </div>


            <div className="food-categories">

                <button
                    className={
                        selectedCategory === "All"
                            ? "active"
                            : ""
                    }
                    onClick={() => onCategoryChange("All")}
                >
                    All
                </button>

                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            onCategoryChange(category)
                        }
                    >
                        {category}
                    </button>
                ))}

            </div>

        </div>
    );
}


export default FoodFilters;