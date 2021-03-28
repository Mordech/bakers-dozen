import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import { BoldSerif } from '../../app-styles/textComponents.jsx';
import fonts from '../../assets/inputs/fonts';
import mapHydrationHeadlineProps from './hydrationHeadlineMapping';

function HydrationHeadline(props) {
  const size = props.size.toLowerCase();
  const bake = props.bake.toLowerCase();
  const texture = props.hydration.texture.toLowerCase();
  const hydration = props.hydration.value;

  return (
    <Text style={appStyles().subHeadline}>
      Your {size} {bake} will be <BoldSerif>{texture}</BoldSerif> at{' '}
      <BoldSerif>{hydration}%</BoldSerif> hydration
      <Text style={{ fontFamily: fonts.sansRegular }}>*</Text>
    </Text>
  );
}

export default connect(mapHydrationHeadlineProps)(HydrationHeadline);
