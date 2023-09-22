import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import appStyles from './app-styles/appStyles';
import { GoodsRow, SizesRow } from './components/ButtonRow';
import HydrationHeadline from './components/HydrationHeadline';
import HydrationTip from './components/hydrationTip';
import SliderAlt from './components/slider-alt/Slider';
import { mapDispatchToProps, mapStateToProps } from './redux/maps';

function PrepareSection(props) {
  return (
    <View style={appStyles().preparePanel}>
      <Text style={appStyles().headline}>What would you like to make?</Text>
      <GoodsRow />
      <Text style={appStyles().subHeadline}>
        How big is your {props.bake.toLowerCase()}?
      </Text>
      <SizesRow />
      <HydrationHeadline />
      <SliderAlt />
      <HydrationTip />
    </View>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(PrepareSection);
