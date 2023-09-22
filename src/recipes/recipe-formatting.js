import { goods } from '../assets/inputs/BakeThings';

// Check if the ingredient is one of the liquids in the liquids array
const liquids = ['water', 'oil', 'milk'];

export function isLiquid(item) {
  return liquids.find((liquid) =>
    item.ingredient.toLowerCase().includes(liquid)
  )
    ? 'ml'
    : 'g';
}

export function bakeEmoji(bake) {
  switch (bake) {
    case goods.bread:
      return '🍞';
    case goods.pizza:
      return '🍕';
    case goods.pretzel:
      return '🥨';

    default:
      console.error('No baked good has been entered defaulting to no emoji');
      return '';
  }
}
