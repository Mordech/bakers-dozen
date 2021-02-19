import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { Dimensions, Platform, UIManager } from 'react-native';
import store from './redux/store';
import Main from './Main.jsx';
import { getWindowSize } from './redux/actions';
import DMSansBold from './assets/fonts/DMSans-Bold.ttf';
import DMSansBoldItalic from './assets/fonts/DMSans-BoldItalic.ttf';
import DMSansItalic from './assets/fonts/DMSans-Italic.ttf';
import DMSansMedium from './assets/fonts/DMSans-Medium.ttf';
import DMSansMediumItalic from './assets/fonts/DMSans-MediumItalic.ttf';
import DMSansRegular from './assets/fonts/DMSans-Regular.ttf';
import EczarBold from './assets/fonts/Eczar-Bold.ttf';
import EczarExtraBold from './assets/fonts/Eczar-ExtraBold.ttf';
import EczarMedium from './assets/fonts/Eczar-Medium.ttf';
import EczarRegular from './assets/fonts/Eczar-Regular.ttf';
import EczarSemiBold from './assets/fonts/Eczar-SemiBold.ttf';

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
    Dimensions.addEventListener('change', onChange());
    return () => {
      Dimensions.removeEventListener('change', onChange());
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
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Main />
    </Provider>
  );
}
