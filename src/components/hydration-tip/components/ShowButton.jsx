import React from 'react';
import { Animated } from 'react-native';
import fonts from '../../../assets/inputs/fonts';

const ShowButton = ({ children }) => (
  <Animated.Text style={{ fontFamily: fonts.sansBold }}>
    {children}
  </Animated.Text>
);

export default ShowButton;
