import { sizes } from '../assets/inputs/BakeThings';

// the Value in ingredients is in percents
// Recepie creator
function createRecepie(hydration, size, ingredients, small, medium, large) {
  // Set the flour value from it's size
  function howMuchFlour() {
    switch (size) {
      case sizes.small:
        return small / (hydration.value / 100 + 1);

      case sizes.medium:
        return medium / (hydration.value / 100 + 1);

      case sizes.large:
        return large / (hydration.value / 100 + 1);

      default:
        return medium / (hydration.value / 100 + 1);
    }
  }

  const flour = {
    ingredient: 'Flour',
    value: howMuchFlour(),
  };

  // Make percentage Float
  function addSome(item) {
    if (item !== undefined) {
      return flour.value * (item / 100);
    }
    return undefined;
  }

  // Define hydration
  const water = {
    ingredient: 'Water',
    value: Math.floor(addSome(hydration.value)),
  };

  // Create recepie
  const recepie = ingredients.map((item) => {
    return {
      ingredient: item.ingredient,
      value: addSome(item.value),
    };
  });
  recepie.unshift(flour, water);

  return recepie;
}

// This is a breakdown of all the recepies in the app

// Pizza
const pizzaIngredients = [
  {
    ingredient: 'Salt',
    value: 3,
  },
  {
    ingredient: 'Yeast',
    value: 2,
  },
];

function makePizza(hydration, size) {
  return createRecepie(hydration, size, pizzaIngredients, 200, 250, 300);
}

// Instuctions
const pizzaInsctructions = [
  'In a bowl, mix salt and flour.',
  'In a separate bowl, add lukewarm water and yeast.',
  'Knead the dough on a clean surface until the dough is smooth, soft, and elastic. (usually takes about 20 minutes).',
  'Cover and let it rise at room temperature until it doubles its size (about 2 hours).',
  'Punch the risen dough down about halfway.',
  'Knead it for 2 minutes.',
  'Let them rise in an airtight container for 6 hours.',
  'Preheat the oven to 230℃ / 210℃ fan assisted.',
  'Bake for 25 minutes or until a good crust has formed.',
];

// Bread
const breadIngredients = [
  {
    ingredient: 'Salt',
    value: 3,
  },
  {
    ingredient: 'Yeast',
    value: 1,
  },
];

function makeBread(hydration, size) {
  return createRecepie(hydration, size, breadIngredients, 480, 640, 1000);
}

const breadInsctructions = [
  'In a bowl, mix salt and flour.',
  'In a separate bowl, add lukewarm water and yeast.',
  'Add the water with yeast to the flour.',
  'Combine all the ingredients together to form a rough dough.',
  'Knead the dough on a clean surface until the dough is smooth, soft, and elastic. (about 10 minutes)',
  'Cover and let it rise at room temperature until it doubles its size (about 1 hour).',
  'Preheat the oven to 230℃ / 210℃ fan assisted.',
  'Punch the risen dough down about halfway.',
  'Knead it for 2 minutes.',
  'Let the dough rise for 30 minutes.',
  'Bake for 40 minutes or until a good crust has formed.',
];

// Prezel Bun
const pretzelIngredients = [
  {
    ingredient: 'Salt',
    value: 2,
  },
  {
    ingredient: 'Yeast',
    value: 1.8,
  },
  {
    ingredient: 'Sugar',
    value: 1,
  },
  {
    ingredient: 'Butter',
    value: 10,
  },
  {
    ingredient: 'Baking Soda (for boiling)',
    value: 13,
  },
  {
    ingredient: 'Olive Oil (to grease the bowl)',
    value: 1.6,
  },
];

function makePretzel(hydration, size) {
  return createRecepie(hydration, size, pretzelIngredients, 600, 750, 900);
}

const pretzelInsctructions = [
  'In a bowl, add lukewarm water, yeast, and sugar.',
  'Allow the yeast to activate (wait until foamy).',
  'In a bowl, melt butter, and let it cool.',
  'Pour the water with activated yeast in the cooled, melted butter.',
  'In a bowl, combine flour and salt, and pour all the liquids.',
  'Knead until the dough forms.',
  'Remove the dough from the bowl, and oil the bowl with olive oil.',
  'Roll the dough through the oil to coat all sides and cover with a kitchen towel or plastic wrap.',
  'Allow the dough to rise for 1 hour or until doubled in size.',
  'Punch the risen dough down about halfway, remove it from the bowl and transfer to the floured working surface.',
  'Knead the bread for 2 minutes, then divide into 10 equal portions.',
  'Flour your hands and roll the dough portions until smooth.',
  'Cover the buns with a kitchen towel or plastic wrap and allow them to rise for 20-30 minutes; they should almost double in size again.',
  'Preheat the oven to 220℃ and line a baking sheet with parchment paper.',
  'Bring a large stockpot with 4 cups of water and the baking soda to a boil.',
  'Lower the pretzel buns into the boiling water using a slotted spoon. Place as many into the boiling water as you can fit into the stockpot without crowding them as you do not want them touching. Also, note that you should have enough water in the stockpot to prevent the buns from touching the bottom.',
  'Boil each of the buns for 1 minute, starting with the rounded side up and turning halfway through the minute (30 seconds each side).',
  'Use the slotted spoon to remove the buns after a minute and place them onto the parchment paper-lined baking sheet.',
  'Score the tops of each bun using a sharp knife.',
  'Bake for 15 minutes or until golden brown.',
  'Remove from the oven and let the buns cool.',
];

export {
  makePizza,
  pizzaInsctructions,
  makeBread,
  breadInsctructions,
  makePretzel,
  pretzelInsctructions,
};
