import React from 'react';
import { Text } from 'react-native';
import fonts from '../assets/inputs/fonts';

const BoldSerif = ({ children }) => (
  <Text style={{ fontFamily: fonts.serifBold }}>{children}</Text>
);
const BoldSans = ({ children }) => (
  <Text style={{ fontFamily: fonts.sansBold }}>{children}</Text>
);

export { BoldSerif, BoldSans };
