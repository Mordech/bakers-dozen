import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './app-styles/appStyles';
import Ingredients from './components/Ingredients';
import Recipe from './components/Recipes';
import ButtonAlt from './components/ButtonAlt';
import RecipeTitle from './components/RecipeTitle';
import shareRecipe from './recipes/shareRecipe';

function RecipeSection() {
  return (
    <View style={appStyles().recipePanel}>
      <RecipeTitle />
      <View>
        <Text style={appStyles().subHeadline}>Ingredients</Text>
      </View>
      <Ingredients />
      <View>
        <Text style={appStyles().subHeadline}>Recipe</Text>
      </View>
      <Recipe />
      <ButtonAlt
        label="Share recipe"
        press={() => {
          shareRecipe();
        }}
      />
    </View>
  );
}

export default RecipeSection;
