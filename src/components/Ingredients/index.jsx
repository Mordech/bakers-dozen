import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import { getIngredients } from '../../recipes/make-recipe';
import { isLiquid } from '../../recipes/recipe-formatting';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import fonts from '../../assets/inputs/fonts';

function Ingredients(props) {
  const { bake, hydration, size } = props;

  return (
    <View style={appStyles().list}>
      {getIngredients(bake, hydration, size).map((item, index) => (
        <Text style={appStyles().body} key={index}>
          <Text style={{ fontFamily: fonts.sansBold }}>{item.ingredient}:</Text>{' '}
          {Math.floor(item.value)}
          {isLiquid(item)}
        </Text>
      ))}
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
