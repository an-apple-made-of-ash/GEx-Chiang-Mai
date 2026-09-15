import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import FoodPage from "./pages/FoodPage/FoodPage";
import MealPlanPage from "./pages/MealPlanPage/MealPlanPage";

import { getFoods } from "./services/foodapi";

function App() {
    const [activePage, setActivePage] = useState("food");

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <>
            <Navbar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            {activePage === "food" && (
                <FoodPage
                    foods={foods}
                    loading={loading}
                    error={error}
                />
            )}

            {activePage === "mealplan" && (
                <MealPlanPage
                    foods={foods}
                    loading={loading}
                    error={error}
                />
            )}
        </>
    );
}

export default App;