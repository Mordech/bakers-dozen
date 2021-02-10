import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Main';
import { Dimensions, Platform, UIManager } from 'react-native';
import { getWindowSize } from './redux/actions';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  //Screen size listener
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

  //Load fonts to app
  let [fontsLoaded] = useFonts({
    'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMSans-BoldItalic': require('./assets/fonts/DMSans-BoldItalic.ttf'),
    'DMSans-Italic': require('./assets/fonts/DMSans-Italic.ttf'),
    'DMSans-Medium': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMSans-MediumItalic': require('./assets/fonts/DMSans-MediumItalic.ttf'),
    'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
    'Eczar-Bold': require('./assets/fonts/Eczar-Bold.ttf'),
    'Eczar-ExtraBold': require('./assets/fonts/Eczar-ExtraBold.ttf'),
    'Eczar-Medium': require('./assets/fonts/Eczar-Medium.ttf'),
    'Eczar-Regular': require('./assets/fonts/Eczar-Regular.ttf'),
    'Eczar-SemiBold': require('./assets/fonts/Eczar-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar style='auto' />
        <Main />
      </Provider>
    );
  }
}