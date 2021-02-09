import { Animated, Easing, LayoutAnimation, Platform } from "react-native";

const fadeIn = (ref) => {
  Animated.timing(ref, {
    useNativeDriver: false,
    toValue: 1,
    duration: 300,
    easing: Easing.out(Easing.exp),
  }).start();
};

const CustomLayoutEaseOut = {
  duration: 350,
  create: {
    delay: 80,
    duration: 250,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    duration: 120,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  },
};
const CustomLayoutSpring = {
  duration: 450,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: Platform.OS === 'android' ? 0.85 : 0.6,
    property: LayoutAnimation.Properties.opacity
  },
};
export { CustomLayoutSpring, CustomLayoutEaseOut, fadeIn }