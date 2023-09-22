import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Eczar_400Regular, Eczar_700Bold } from '@expo-google-fonts/eczar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { Dimensions, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/Main';
import { getWindowSize } from './src/redux/actions';
import store from './src/redux/store';

SplashScreen.preventAutoHideAsync();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  // Load fonts to app
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
    Eczar_400Regular,
    Eczar_700Bold,
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  function onChange() {
    store.dispatch(getWindowSize(Dimensions.get('window')));
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
  });

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();
  console.log('fonts loaded');
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Main />
    </Provider>
  );
}
