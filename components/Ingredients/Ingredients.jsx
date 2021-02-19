import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import { isLiquid } from '../../recepies/recepieFormating';
import { getIngredients } from '../../recepies/makeRecepie';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';

function Ingredients(props) {
  const { bake } = props;
  const { hydration } = props;
  const { size } = props;

  return (
    <View style={appStyles().list}>
      {getIngredients(bake, hydration, size).map((item, index) => (
        <Text style={appStyles().body} key={index}>
          <Text style={{ fontFamily: 'DMSans-Bold' }}>{item.ingredient}:</Text>{' '}
          {Math.floor(item.value)}
          {isLiquid(item)}
        </Text>
      ))}
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
