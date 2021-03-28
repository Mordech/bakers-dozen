import { StyleSheet } from 'react-native';
import fonts from '../../assets/inputs/fonts';

const styles = () =>
  StyleSheet.create({
    listItem: {
      marginBottom: 8,
      flexDirection: 'row',
      maxWidth: 576,
    },
    listNumber: {
      fontFamily: fonts.sansBold,
      width: 28,
    },
  });

export default styles;
