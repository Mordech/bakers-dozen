import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import mapHydrationHeadlineProps from './hydrationHeadlineMapping';

function HydrationHeadline(props) {
  return (
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
  );
}

export default connect(mapHydrationHeadlineProps)(HydrationHeadline);
