import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './app-styles/appStyles';
import Ingredients from './components/Ingredients/Ingredients.jsx';
import Recepie from './components/recepie/Recepie.jsx';
import ButtonAlt from './components/button-alt/ButtonAlt.jsx';
import RecepieTitle from './components/recepie-title/RecepieTitle.jsx';
import shareRecepie from './recepies/shareRecepie';

function RecepieSection() {
  return (
    <View style={appStyles().recepiePanel}>
      <RecepieTitle />
      <View>
        <Text style={appStyles().subHeadline}>Ingredients</Text>
      </View>
      <Ingredients />
      <View>
        <Text style={appStyles().subHeadline}>Recepie</Text>
      </View>
      <Recepie />
      <ButtonAlt
        lable="Share recipie"
        press={() => {
          shareRecepie();
        }}
      />
    </View>
  );
}

export default RecepieSection;
