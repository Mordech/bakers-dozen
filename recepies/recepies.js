import { sizes } from '../assets/inputs/BakeThings'

//the Value in ingredients is in percents
//Recepie creator
function createRecepie(hydration, size, ingredients, small, medium, large) {
    //Set the flour value from it's size
    var flour = {
        ingredient: 'Flour',
        value: howMuchFlour(size),
    }

    function howMuchFlour(size) {
        switch (size) {
            case sizes.small:
                return small / (hydration.value / 100 + 1)

            case sizes.medium:
                return medium / (hydration.value / 100 + 1)

            case sizes.large:
                return large / (hydration.value / 100 + 1)

            default:
                return medium / (hydration.value / 100 + 1)
        }
    }

    //Make percentage Float
    function addSome(item) {
        if (item != undefined) {
            return flour.value * (item / 100)
        }
        return undefined
    }

    //Define hydration
    const water = {
        ingredient: 'Water',
        value: Math.floor(addSome(hydration.value)),
    }

    //Create recepie
    var recepie = ingredients.map((item) => {
        return {
            ingredient: item.ingredient,
            value: addSome(item.value),
        }
    })
    recepie.unshift(flour, water)

    return recepie
}

//This is a breakdown of all the recepies in the app

//Pizza
const pizzaIngredients = [
    {
        ingredient: 'Salt',
        value: 3,
    },
    {
        ingredient: 'Yeast',
        value: 2,
    },
]

function makePizza(hydration, size) {
    return createRecepie(hydration, size, pizzaIngredients, 200, 250, 300)
}

//Instuctions
const pizzaInsctructions = [
    'In a big bowl, add the water.',
    'Dissolve the salt into the water.',
    'Add 50 grams of flour and mix it well.',
    'Add yeast.',
    'Gradually add the remaining flour.',
    'Knead the dough for about 20 minutes or until smooth.',
    'Cover and let it rise for 2 hours at room temperature.',
    'Punch the risen dough down about half way. Knead the bread for 2 minutes.',
    'Let them rise in an airtight container for 6 hours.',
    'To bake, preheat your oven to 230°C / 210°C fan assisted. Bake for 25 minutes or until a good crust has formed.',
]

//Bread
const breadIngredients = [
    {
        ingredient: 'Salt',
        value: 3,
    },
    {
        ingredient: 'Yeast',
        value: 1,
    },
]

function makeBread(hydration, size) {
    return createRecepie(hydration, size, breadIngredients, 480, 640, 1000)
}

const breadInsctructions = [
    'Add the flour to a clean mixing bowl. Mix the salt through the flour. Add the water and yeast starter to the flour. Combine all the ingredients together to form a rough dough.',
    'Turn the dough out on to a clean surface and knead for approximately 10 minutes. The dough should be smooth, soft and elastic.',
    'Cover and let it rise for 1 hours at room temperature.',
    'Punch the risen dough down about half way. Knead the bread for 2 minutes.',
    'Let the bread rise for 30 minutes.',
    'To bake, preheat your oven to 230°C / 210°C fan assisted. Bake for 25 minutes or until a good crust has formed.',
]

//Prezel Bun
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
]

function makePretzel(hydration, size) {
    return createRecepie(hydration, size, pretzelIngredients, 600, 750, 900)
}

const pretzelInsctructions = [
    'In your measuring cup of lukewarm water, add the yeast and sugar. Allow the yeast to activate for about 5 minutes, or until foamy.',
    'In your stand mixer bowl, combine the flour and salt. Add in the water with activated yeast and the cooled, melted butter.',
    'Mix using the dough hook attachment on low speed for 2-3 minutes until the dough forms. Knead with your dough hook on medium speed for 5-6 minutes.',
    'Remove the dough from the bowl (or transfer to an oiled bowl) long enough to oil the bowl with olive oil. Roll the dough through the oil to coat all sides. Cover with a kitchen towel or plastic wrap.  Allow the dough to rise for 1 hour, or until doubled in size.',
    'Punch the risen dough down about half way, then remove from the bowl and transfer to your floured working surface. Knead the bread for 2 minutes, then divide into 10 equal portions.',
    'Make sure to dust your hands with some flour before rolling the portion balls of dough in your hands with the smooth rounded side facing up and the bottom side cupped in one hand. Use your free hand to smooth the domed top portion of the dough ball, making the surface less likely to lose shape. Repeat with each bun.',
    'Cover your shaped buns with your kitchen towel or plastic wrap and allow them to rise for 20-30 minutes, they should almost double in size again.',
    'Preheat your oven to 220 degrees C and line a baking sheet with parchment paper.',
    'Bring a large stock pot with 4 cups of water and the baking soda to a boil.',
    'Lower the pretzel buns into the boiling water using a slotted spoon, place as many into the boiling water as you can fit into your stock pot without crowding them as you do not want them touching. Also note that you should have enough water in the stock pot to prevent the buns from touching the bottom as well.',
    'Boil each of the buns for 1 minute, starting with the rounded side up and turning halfway through the minute (30 seconds each side). Use your slotted spoon to remove the buns after a minute and place them onto the parchment paper lined baking sheet.',
    'Score the tops of each bun using a sharp knife. You can do the same three slits as I have, or the usual pretzel cross that is common. Whatever shape or design you like. Score each bun as it comes out of the boiling water, then top with coarse sea salt.',
    'Bake for 15 minutes or until golden brown and the buns are still soft on the crust, but they are not too soft. Your finger indent should spring back, rather than leaving a mark.',
    'Remove from the oven when done and transfer to a wire cooling rack to cool completely.',
]

export {
    makePizza,
    pizzaInsctructions,
    makeBread,
    breadInsctructions,
    makePretzel,
    pretzelInsctructions,
}
