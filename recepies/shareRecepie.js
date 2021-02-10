import { Share } from "react-native";
import store from "../redux/store";
import isLiquid from "./isLiquid";
import { getIngredients, getInstructions } from "./makeRecepie";

export default function shareRecepie() {
    const bake = store.getState().bake;
    const hydration = store.getState().hydration;
    const size = store.getState().size;

    const title = "Recepie for " + size + " " + bake + " " + hydration.value + "% Hydration:";

    const ingredients =
        getIngredients(bake, hydration, size).map((item) =>
            `${item.ingredient}: ${Math.floor(item.value)}${isLiquid(item)}
`).join("");

    const instructions =
        getInstructions(bake).map((item, index) =>
            `${index + 1}. ${item}
`).join("");

    const footer = "Created by you with the help of the Baker's Dozen app ";

    const message =
        `${title}
        
Ingredients:
${ingredients}
Instructions:
${instructions}

${footer}`;

    Share.share({ message })

}
