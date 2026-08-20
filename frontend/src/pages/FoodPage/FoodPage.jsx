import { useEffect, useMemo, useState } from "react";

import { getFoods } from "../../services/foodapi";

import FoodFilters from "../../components/FoodFilters/FoodFilters";
import FoodGallery from "../../components/FoodGallery/FoodGallery";
import FoodModal from "../../components/FoodModal/FoodModal";

import "./FoodPage.css";


function FoodPage() {
    const [foods, setFoods] = useState([]);

    const [selectedFood, setSelectedFood] = useState(null);

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    /*
     * Load foods
     */

    useEffect(() => {
        async function loadFoods() {
            try {
                const data = await getFoods();

                setFoods(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadFoods();
    }, []);


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
        const searchTerm = search
            .trim()
            .toLowerCase();

        return foods.filter((food) => {

            const matchesSearch =
                !searchTerm ||
                food.name
                    ?.toLowerCase()
                    .includes(searchTerm) ||
                food.description
                    ?.toLowerCase()
                    .includes(searchTerm);


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
        search,
        selectedCategory,
    ]);


    /*
     * Loading
     */

    if (loading) {
        return (
            <main className="food-page">
                <p>Loading...</p>
            </main>
        );
    }


    /*
     * Error
     */

    if (error) {
        return (
            <main className="food-page">
                <p>Error: {error}</p>
            </main>
        );
    }


    /*
     * Food selection
     */

    function handleFoodClick(food) {
        setSelectedFood(food);
    }


    return (
        <main className="food-page">

            {/* Hero */}

            <section className="hero">

                <p className="hero-eyebrow">
                    GEx CHIANG MAI
                </p>

                <h1>
                    7-Eleven
                    <br />
                    Food Guide
                </h1>

                <p className="hero-description">
                    Your one-stop portal to healthy eating in 7-Eleven
                </p>

            </section>


            {/* Gallery */}

            <section className="gallery-section">

                <div className="gallery-header">

                    <div>
                        <p className="section-eyebrow">
                            EXPLORE
                        </p>

                        <h2>
                            {selectedCategory === "All"
                                ? "All dishes"
                                : selectedCategory}
                        </h2>
                    </div>

                    <p className="food-count">
                        {filteredFoods.length}{" "}
                        {filteredFoods.length === 1
                            ? "dish"
                            : "dishes"}
                    </p>

                </div>


                <FoodFilters
                    search={search}
                    onSearchChange={setSearch}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />


                <FoodGallery
                    foods={filteredFoods}
                    onFoodClick={handleFoodClick}
                />

                {selectedFood && (
                    <FoodModal
                        food={selectedFood}
                        onClose={() => setSelectedFood(null)}
                    />
                )}

            </section>

        </main>
    );
}


export default FoodPage;