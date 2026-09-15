export function calculateNutrition(mealPlan, mealTypes) {
    const nutrition = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    };

    mealTypes.forEach((meal) => {
        mealPlan[meal].forEach((item) => {
            const food = item.food;
            const quantity = item.quantity;

            nutrition.calories +=
                Number(food.calories || 0) * quantity;

            nutrition.protein +=
                Number(food.protein || 0) * quantity;

            nutrition.carbohydrates +=
                Number(food.total_carbohydrates || 0) *
                quantity;

            nutrition.fat +=
                Number(food.total_fats || 0) * quantity;
        });
    });

    return nutrition;
}

export function calculateMealNutrition(mealPlan, meal) {
    const nutrition = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    };

    mealPlan[meal].forEach((item) => {
        const food = item.food;
        const quantity = item.quantity;

        nutrition.calories +=
            Number(food.calories || 0) * quantity;

        nutrition.protein +=
            Number(food.protein || 0) * quantity;

        nutrition.carbohydrates +=
            Number(food.total_carbohydrates || 0) *
            quantity;

        nutrition.fat +=
            Number(food.total_fats || 0) * quantity;
    });

    return nutrition;
}