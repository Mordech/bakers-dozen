import { Share } from 'react-native';
import store from '../redux/store';
import { bakeEmoji, isLiquid } from './recipe-formatting';
import { getIngredients, getInstructions } from './make-recipe';

export default function shareRecipe() {
  const { bake } = store.getState();
  const { hydration } = store.getState();
  const { size } = store.getState();

  const title = `Recipe for ${size} ${bake} ${
    hydration.value
  }% Hydration ${bakeEmoji(bake)}`;

  const ingredients = getIngredients(bake, hydration, size)
    .map(
      (item) => `${item.ingredient}: ${Math.floor(item.value)}${isLiquid(item)}`
    )
    .join('\n');

  const instructions = getInstructions(bake)
    .map((item, index) => `${index + 1}. ${item}`)
    .join('\n');

  const footer = "Created by you with the help of the Baker's Dozen app";

  const message = `${title}

Ingredients:
${ingredients}

Instructions:
${instructions}

${footer}`;

  Share.share({ message });
}
