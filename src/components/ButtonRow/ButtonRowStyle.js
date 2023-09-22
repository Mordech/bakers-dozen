import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: 12,
      marginBottom: 48,
      flexWrap: 'nowrap',
      alignSelf: 'flex-start',
    },
  });

export const ButtonRowScrollView = ({ children }) => (
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    alwaysBounceHorizontal={false}>
    {children}
  </ScrollView>
);

export default styles;
