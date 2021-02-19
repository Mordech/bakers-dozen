import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from './colors';
import themeColor from './ThemeColors';
import fonts from '../assets/inputs/fonts';
import isWide, { widthRange } from './isWide';

const appStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: themeColor(colors.background),
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      marginBottom: Platform.OS === 'ios' ? -34 : 0,
    },
    margins: {
      flexDirection: isWide(1024) ? 'row' : 'column',
      // widthRange improve responsive design for iPad 8th gen and iPad pro 9.7 inch in horizontal
      marginHorizontal: isWide(640) ? (widthRange(1024, 1170) ? 0 : 60) : 24,
      marginVertical:
        Platform.OS === 'android' ? Constants.statusBarHeight + 32 : 24,
      alignSelf: isWide(1024) ? 'center' : 'stretch',
    },
    preparePanel: isWide(1024)
      ? {
          flex: 3,
          alignContent: 'stretch',
          marginHorizontal: 36,
          marginTop: 36,
          maxWidth: 450,
          marginEnd: 48,
        }
      : {
          maxWidth: 480,
        },
    recepiePanel: isWide(1024)
      ? {
          flex: 1,
          marginHorizontal: 36,
          marginTop: 36,
          marginStart: 48,
          marginBottom: 72,
        }
      : { marginBottom: Platform.OS === 'ios' ? 48 : 0 },
    smallText: {
      fontFamily: fonts.sansRegular,
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0.2,
      color: themeColor(colors.primary),
    },
    body: {
      fontFamily: fonts.sansRegular,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
      color: themeColor(colors.primary),
      marginBottom: 6,
    },
    headline: {
      fontFamily: fonts.serifRegular,
      fontSize: 36,
      lineHeight: 42,
      paddingTop: 8,
      color: themeColor(colors.primary),
    },
    subHeadline: {
      fontFamily: fonts.serifRegular,
      fontSize: 24,
      lineHeight: 30,
      paddingTop: 4,
      color: themeColor(colors.primary),
    },
    list: {
      marginTop: 8,
      marginBottom: 36,
      marginEnd: 36,
      alignSelf: 'stretch',
    },
  });

export default appStyles;
