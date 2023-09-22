import { goods } from '../assets/inputs/BakeThings';
import {
  breadInstructions,
  makeBread,
  makePizza,
  makePretzel,
  pizzaInstructions,
  pretzelInstructions,
} from './recipes';

function getIngredients(bake, hydration, size) {
  switch (bake) {
    case goods.bread:
      return makeBread(hydration, size);

    case goods.pizza:
      return makePizza(hydration, size);

    case goods.pretzel:
      return makePretzel(hydration, size);

    default:
      console.error('Unknown type 🥖');
      return makeBread(hydration, size);
  }
}

function getInstructions(bake) {
  switch (bake) {
    case goods.bread:
      return breadInstructions;
    case goods.pizza:
      return pizzaInstructions;
    case goods.pretzel:
      return pretzelInstructions;
    default:
      console.error('Unknown bake 🥖');
      return pizzaInstructions;
  }
}

export { getIngredients, getInstructions };
