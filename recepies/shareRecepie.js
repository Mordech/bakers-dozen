import { Share } from "react-native";
import store from "../redux/store";
import { getIngredients, getInstructions } from "./makeRecepie";

const sharableRecepie = () => {
    const bake = store.getState().bake
    const hydration = store.getState().hydration
    const size = store.getState().size

    const title = "*Recepie for " + size + " " + bake + " " + hydration.value + "% Hydration:*"
    const ingredients = () =>
        getIngredients(bake, hydration, size).map((item) =>
            item.ingredient + ":" + Math.floor(item.value) + "\n").join('')

    const instructions = () =>
        getInstructions(bake).map((item, index) =>
            index + 1 + '. ' + item + '\n').join('')

    return title + "\n\n*Ingredients:*\n" + ingredients() + '\n*Instructions:*\n' + instructions()
};

export default function shareRecepie() {
    Share.share({ message: sharableRecepie() })
}