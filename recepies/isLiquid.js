//Check if the ingredient is water/olive oil or not
export default function isLiquid(item) {
    return item.ingredient.includes("Water") ||
        item.ingredient.includes("Olive")
        ? "ml"
        : "g";
}