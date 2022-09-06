import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { Dimensions, Platform, UIManager } from 'react-native';
import store from './src/redux/store';
import Main from './src/Main.jsx';
import { getWindowSize } from './src/redux/actions';
import DMSansBold from './src/assets/fonts/DMSans-Bold.ttf';
import DMSansBoldItalic from './src/assets/fonts/DMSans-BoldItalic.ttf';
import DMSansItalic from './src/assets/fonts/DMSans-Italic.ttf';
import DMSansMedium from './src/assets/fonts/DMSans-Medium.ttf';
import DMSansMediumItalic from './src/assets/fonts/DMSans-MediumItalic.ttf';
import DMSansRegular from './src/assets/fonts/DMSans-Regular.ttf';
import EczarBold from './src/assets/fonts/Eczar-Bold.ttf';
import EczarExtraBold from './src/assets/fonts/Eczar-ExtraBold.ttf';
import EczarMedium from './src/assets/fonts/Eczar-Medium.ttf';
import EczarRegular from './src/assets/fonts/Eczar-Regular.ttf';
import EczarSemiBold from './src/assets/fonts/Eczar-SemiBold.ttf';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  // Screen size listener
  function onChange() {
    store.dispatch(getWindowSize(Dimensions.get('window')));
    // console.log(store.getState().windowSize)
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.remove('change', onChange);
    };
  });

  // Load fonts to app
  const [fontsLoaded] = useFonts({
    'DMSans-Bold': DMSansBold,
    'DMSans-BoldItalic': DMSansBoldItalic,
    'DMSans-Italic': DMSansItalic,
    'DMSans-Medium': DMSansMedium,
    'DMSans-MediumItalic': DMSansMediumItalic,
    'DMSans-Regular': DMSansRegular,
    'Eczar-Bold': EczarBold,
    'Eczar-ExtraBold': EczarExtraBold,
    'Eczar-Medium': EczarMedium,
    'Eczar-Regular': EczarRegular,
    'Eczar-SemiBold': EczarSemiBold,
  });

  if (!fontsLoaded) {
    // Get window size if oriantation changed while loading app
    store.dispatch(getWindowSize(Dimensions.get('window')));
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Main />
    </Provider>
  );
}
