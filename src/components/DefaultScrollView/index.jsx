import React from 'react';
import { ScrollView } from 'react-native';

const DefaultScrollView = ({ children }) => (
  <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false}>
    {children}
  </ScrollView>
);

export default DefaultScrollView;
