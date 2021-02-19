import React from 'react';
import LottieView from 'lottie-react-native';

import { connect } from 'react-redux';
import breadLight from './bread-light.json';
import breadDark from './bread-dark.json';
import pizzaLight from './pizza-light.json';
import pizzaDark from './pizza-dark.json';
import pretzelLight from './pretzel-light.json';
import pretzelDark from './pretzel-dark.json';
import { goods } from '../inputs/BakeThings';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import isWide from '../../app-styles/isWide';

function getAnimationLink(bake, theme) {
  switch (theme) {
    case 'light':
      switch (bake) {
        case goods.bread:
          return breadLight;
        case goods.pizza:
          return pizzaLight;
        case goods.pretzel:
          return pretzelLight;
        default:
          console.error(
            "Can't find your bake running default animation for dark theme"
          );
          return breadLight;
      }
    case 'dark':
      switch (bake) {
        case goods.bread:
          return breadDark;
        case goods.pizza:
          return pizzaDark;
        case goods.pretzel:
          return pretzelDark;
        default:
          console.error(
            "Can't find your bake running default animation for dark theme"
          );
          return breadDark;
      }
    default:
      console.error(
        'Oops, animation has failed for some reason running default animation 🍞'
      );
      return breadLight;
  }
}

function RecepieAnimation(props) {
  return (
    <LottieView
      style={{
        flex: isWide(321) ? 0 : 1,
        maxWidth: 150,
        height: '100%',
        position: 'relative',
      }}
      source={getAnimationLink(props.bake, props.theme)}
      autoPlay
      loop
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecepieAnimation);
