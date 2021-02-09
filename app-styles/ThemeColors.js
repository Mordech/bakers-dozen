import { Appearance } from "react-native";
import { toggleTheme } from "../redux/actions";
import store from "../redux/store";
import colors from "./colors";

//Listen to device appearance
Appearance.addChangeListener(setTheme => {
    const theme = Appearance.getColorScheme() === 'light' ? 'dark' : 'light';
    store.dispatch(toggleTheme(theme));

})

function getTheme(props) {
    return store.getState().theme
}

//Contextual colors responsive to device's colorScheme
function themeColor(color) {
    switch (color) {
        case 'primary':
            return getTheme() === 'light' ? colors.darkBlue : colors.lightGrey
        case 'secondary':
            return getTheme() === 'light' ? colors.lightGrey : colors.darkBlue
        case 'background':
            return getTheme() === 'light' ? colors.backgroundLight : colors.backgroundDark
        default:
            console.error('No color type has been entered 🧑‍🎨')
    }
}

export default themeColor;