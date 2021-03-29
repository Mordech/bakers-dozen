import { StyleSheet } from 'react-native';
import colors from '../../app-styles/colors';
import themeColor from '../../app-styles/ThemeColors';

const styles = () =>
  StyleSheet.create({
    constainer: {
      marginTop: 8,
      marginBottom: 40,
      alignSelf: 'stretch',
      padding: 14,
      paddingBottom: 18,
      backgroundColor: themeColor(colors.secondary),
      borderRadius: 8,
    },
  });

export default styles;
