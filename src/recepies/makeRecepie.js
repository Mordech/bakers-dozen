import { goods } from '../assets/inputs/BakeThings';
import {
  breadInsctructions,
  makeBread,
  makePizza,
  makePretzel,
  pizzaInsctructions,
  pretzelInsctructions,
} from './recepies';

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
      return breadInsctructions;
    case goods.pizza:
      return pizzaInsctructions;
    case goods.pretzel:
      return pretzelInsctructions;
    default:
      console.error('Unkown bake 🥖');
      return pizzaInsctructions;
  }
}

export { getIngredients, getInstructions };
