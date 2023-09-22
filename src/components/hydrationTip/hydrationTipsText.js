import { goods } from '../../assets/inputs/BakeThings';

const tips = {
  bread:
    '\nThe more hydration, the more rustic your bread 🍞 is. Note that above 70% hydration, the bread will be tough to handle.',
  pizza:
    "\nPizza 🍕, like bread, is more rustic the more hydration you use. But be careful; above 70% hydration, it's a challenging dough to handle.",
  pretzel:
    "\nThe recommended hydration of pretzels 🥨 is firm at 50%-57% hydration, but it doesn't hurt experimenting.",
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
