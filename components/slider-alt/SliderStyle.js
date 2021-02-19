import { Platform, StyleSheet } from 'react-native';

const sliderStyle = () =>
  StyleSheet.create({
    slider: {
      marginHorizontal: Platform.OS === 'android' ? -14 : -4,
      height: 36,
    },
    container: {
      marginTop: 8,
      marginBottom: 12,
    },
  });

export default sliderStyle;
