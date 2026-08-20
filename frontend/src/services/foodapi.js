import API_URL from "./api";


export async function getFoods() {
    const response = await fetch(`${API_URL}/foods/`);

    if (!response.ok) {
        throw new Error("Failed to fetch foods");
    }

    return response.json();
}


export async function getFood(foodId) {
    const response = await fetch(
        `${API_URL}/foods/${foodId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch food");
    }

    return response.json();
}