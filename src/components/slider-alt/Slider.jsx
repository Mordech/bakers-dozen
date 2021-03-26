import React, { useEffect, useRef, useState } from 'react';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import colors from '../../app-styles/colors';
import sliderStyle from './SliderStyle';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import themeColor from '../../app-styles/ThemeColors';
import appStyles from '../../app-styles/appStyles';

function SliderView(props) {
  const currentHydrationValue = useRef(props.hydration.value);
  const [hydrationValue, setHydrationValue] = useState(props.hydration.value);

  useEffect(() => {
    if (props.hydration.value !== hydrationValue) {
      props.setHydration(hydrationValue);
    }
  }, [hydrationValue]);

  return (
    <Slider
      style={sliderStyle().slider}
      step={1}
      thumbTintColor={themeColor(colors.primary)}
      minimumTrackTintColor={themeColor(colors.primary)}
      maximumTrackTintColor={
        Platform.OS === 'android'
          ? themeColor(colors.primary)
          : themeColor(colors.secondary)
      }
      tapToSeek={true}
      onValueChange={(value) => {
        if (value !== hydrationValue) {
          requestAnimationFrame(() => setHydrationValue(value));
        }
      }}
      minimumValue={50}
      maximumValue={80}
      value={currentHydrationValue.current}
    />
  );
}

function SliderAlt(props) {
  return (
    <View style={sliderStyle().container}>
      <SliderView {...props} />
      <Text style={appStyles().smallText}>
        Set the hydration of your {props.bake.toLowerCase()}
      </Text>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderAlt);
