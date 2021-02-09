import { Appearance, Dimensions } from "react-native";
import { combineReducers } from "redux";
import { goods, lists, sizes } from '../assets/inputs/BakeThings'
import { makeBread } from "../recepies/recepies";

const initTheme = Appearance.getColorScheme();

const initHydration = {
    value: 60,
    texture: 'Standard'
}

const initRecepie = makeBread(60, sizes.medium)

const window = Dimensions.get('window');

const appLists = (state = lists ) => {
    return state
}

const bake = (state = goods.bread , action) => {
    if (action.type === 'TOOGLE_GOODS') {
        return action.payload
    } else {
        return state
    }
}

const size = (state = sizes.medium, action) => {
    if (action.type === 'TOGGLE_SIZE') {
        return action.payload
    } else {
        return state
    }
}

const theme = (state = initTheme, action) => {
    if (action.type === 'TOGGLE_THEME') {
        return action.payload
    } else {
        return state
    }
}

const hydration = (state = initHydration, action) => {
    if (action.type === 'SET_HYDRATION') {
        return action.payload
    } else {
        return state
    }
}

const recepie = (state = initRecepie, action) => {
    if (action.type === 'SET_RECIPIE'){
        return action.payload
    } else {
        return state
    }
}

const windowSize = (state = window, action) => {
    if (action.type === 'GET_WINDOW_SIZE'){
        return action.payload
    } else {
        return state
    }
}

const readMore = (state = false, action) => {
    if (action.type === 'TOGGLE_READMORE'){
        return action.payload
    } else {
        return state
    }
}
const reducers = combineReducers({
    bake, 
    size,
    theme,
    appLists,
    hydration,
    recepie,
    windowSize,
    readMore
});

export default reducers