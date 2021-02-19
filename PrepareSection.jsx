import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import appStyles from './app-styles/appStyles';
import { GoodsRow, SizesRow } from './components/button-row/ButtonRow.jsx';
import HydrationTip from './components/hydration-tip/HydrationTip.jsx';
import SliderAlt from './components/slider-alt/Slider.jsx';
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
      {/* Example for output: Your bread is standart at 65% hydration */}
      <Text style={appStyles().subHeadline}>
        Your {props.size.toLowerCase()} {props.bake.toLowerCase()} is{' '}
        <Text style={{ fontFamily: 'Eczar-ExtraBold' }}>
          {props.hydration.texture.toLowerCase()}
        </Text>{' '}
        at{' '}
        <Text style={{ fontFamily: 'Eczar-ExtraBold' }}>
          {props.hydration.value}%
        </Text>{' '}
        hydration<Text style={{ fontFamily: 'DMSans-Regular' }}>*</Text>
      </Text>
      <SliderAlt />
      <HydrationTip />
    </View>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(PrepareSection);
