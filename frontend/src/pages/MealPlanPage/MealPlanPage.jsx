import { useState } from "react";

import AddFoodModal from "./components/AddFoodModal/AddFoodModal";
import NutritionSummary from "./components/NutritionSummary/NutritionSummary";
import MealSection from "./components/MealSection/MealSection";

import {
    calculateNutrition,
    calculateMealNutrition,
} from "./mealPlanUtils";

import "./MealPlanPage.css";

const mealTypes = [
    "Breakfast",
    "Lunch",
    "Snack",
    "Dinner",
    "Supper",
];

function MealPlanPage({ foods = [] }) {
    const [mealPlan, setMealPlan] = useState({
        Breakfast: [],
        Lunch: [],
        Snack: [],
        Dinner: [],
        Supper: [],
    });

    const [selectedMeal, setSelectedMeal] = useState(null);

    function openFoodSelector(meal) {
        setSelectedMeal(meal);
    }

    function closeFoodSelector() {
        setSelectedMeal(null);
    }

    function addFood(food) {
        setMealPlan((currentPlan) => {
            const existingFoodIndex =
                currentPlan[selectedMeal].findIndex(
                    (item) => item.food.id === food.id
                );

            if (existingFoodIndex !== -1) {
                const updatedMeal = [
                    ...currentPlan[selectedMeal],
                ];

                updatedMeal[existingFoodIndex] = {
                    ...updatedMeal[existingFoodIndex],
                    quantity:
                        updatedMeal[existingFoodIndex].quantity + 1,
                };

                return {
                    ...currentPlan,
                    [selectedMeal]: updatedMeal,
                };
            }

            return {
                ...currentPlan,
                [selectedMeal]: [
                    ...currentPlan[selectedMeal],
                    {
                        food: food,
                        quantity: 1,
                    },
                ],
            };
        });

        closeFoodSelector();
    }

    function removeFood(meal, index) {
        setMealPlan((currentPlan) => ({
            ...currentPlan,
            [meal]: currentPlan[meal].filter(
                (_, foodIndex) => foodIndex !== index
            ),
        }));
    }

    function increaseQuantity(meal, index) {
        setMealPlan((currentPlan) => {
            const updatedMeal = [
                ...currentPlan[meal],
            ];

            updatedMeal[index] = {
                ...updatedMeal[index],
                quantity:
                    updatedMeal[index].quantity + 1,
            };

            return {
                ...currentPlan,
                [meal]: updatedMeal,
            };
        });
    }

    function decreaseQuantity(meal, index) {
        setMealPlan((currentPlan) => {
            const updatedMeal = [
                ...currentPlan[meal],
            ];

            if (updatedMeal[index].quantity === 1) {
                return currentPlan;
            }

            updatedMeal[index] = {
                ...updatedMeal[index],
                quantity:
                    updatedMeal[index].quantity - 1,
            };

            return {
                ...currentPlan,
                [meal]: updatedMeal,
            };
        });
    }

    const totalNutrition = calculateNutrition(
        mealPlan,
        mealTypes
    );

    return (
        <main className="meal-plan-page">
            <h1>Meal Plan</h1>

            <NutritionSummary
                nutrition={totalNutrition}
            />

            <div className="meal-sections">
                {mealTypes.map((meal) => {
                    const mealNutrition =
                        calculateMealNutrition(
                            mealPlan,
                            meal
                        );

                    return (
                        <MealSection
                            key={meal}
                            meal={meal}
                            foods={mealPlan[meal]}
                            nutrition={mealNutrition}
                            onAddFood={() =>
                                openFoodSelector(meal)
                            }
                            onRemoveFood={(index) =>
                                removeFood(meal, index)
                            }
                            onIncreaseQuantity={(index) =>
                                increaseQuantity(
                                    meal,
                                    index
                                )
                            }
                            onDecreaseQuantity={(index) =>
                                decreaseQuantity(
                                    meal,
                                    index
                                )
                            }
                        />
                    );
                })}
            </div>

            {selectedMeal && (
                <AddFoodModal
                    meal={selectedMeal}
                    foods={foods}
                    onAddFood={addFood}
                    onClose={closeFoodSelector}
                />
            )}
        </main>
    );
}

export default MealPlanPage;