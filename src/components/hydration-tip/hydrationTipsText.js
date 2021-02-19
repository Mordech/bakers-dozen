import { goods } from '../../assets/inputs/BakeThings';

const tips = {
  bread:
    'The more hydration, the more rustic your bread 🍞 is. But above 70% hydration, it will be tough to manage it.',
  pizza:
    "Pizza 🍕, like bread, is crustier the more hydration you use. But be careful. Above 70% hydration, it's tough to manage",
  pretzel:
    "The recommended hydration of pretzels 🥨 is stiff at 50%-57% hydration, but it doesn't hurt experimenting.",
};

const getTip = (bake) => {
  switch (bake) {
    case goods.bread:
      return tips.bread;
    case goods.pizza:
      return tips.pizza;
    case goods.pretzel:
      return tips.pretzel;
    default:
      console.error(`No tip for this the value ${bake}🤷‍♂️`);
      return tips.bread;
  }
};

export default getTip;
