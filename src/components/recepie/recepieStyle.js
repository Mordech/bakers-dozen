import { StyleSheet } from 'react-native';
import { fonts } from '../../assets/inputs/fonts';

const styles = () =>
  StyleSheet.create({
    listItem: {
      marginBottom: 8,
      flexDirection: 'row',
    },
    listNumber: {
      fontFamily: fonts.sansBold,
      minWidth: 28,
      width: 28,
    },
  });

export default styles;
