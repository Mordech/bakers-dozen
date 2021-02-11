import { goods } from "../assets/inputs/BakeThings";

//Check if the ingredient is water/olive oil or not
export function isLiquid(item) {
    return item.ingredient.includes("Water") ||
        item.ingredient.includes("Olive")
        ? "ml"
        : "g";
}

export function bakeEmoji(bake) {
    switch (bake) {
        case goods.bread:
            return "🍞"
        case goods.pizza:
            return "🍕"
        case goods.pretzel:
            return "🥨"

        default:
            console.error('No baked good has been entered defaulting to no emoji')
            return
    }
}