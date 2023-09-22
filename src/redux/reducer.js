import { Appearance, Dimensions } from 'react-native';
import { combineReducers } from 'redux';
import { goods, lists, sizes } from '../assets/inputs/BakeThings';
import { makeBread } from '../recipes/recipes';

const initTheme = Appearance.getColorScheme();

const initHydration = {
  value: 60,
  texture: 'Standard',
};

const initRecipe = makeBread(60, sizes.medium);

const window = Dimensions.get('window');

function appLists(state = lists) {
  return state;
}

function bake(state = goods.bread, action) {
  if (action.type === 'TOOGLE_GOODS') {
    return action.payload;
  }
  return state;
}

function size(state = sizes.medium, action) {
  if (action.type === 'TOGGLE_SIZE') {
    return action.payload;
  }
  return state;
}

function theme(state = initTheme, action) {
  if (action.type === 'TOGGLE_THEME') {
    return action.payload;
  }
  return state;
}

function hydration(state = initHydration, action) {
  if (action.type === 'SET_HYDRATION') {
    return action.payload;
  }
  return state;
}

function recipe(state = initRecipe, action) {
  if (action.type === 'SET_RECIPE') {
    return action.payload;
  }
  return state;
}

function windowSize(state = window, action) {
  if (action.type === 'GET_WINDOW_SIZE') {
    return action.payload;
  }
  return state;
}

function readMore(state = false, action) {
  if (action.type === 'TOGGLE_READMORE') {
    return action.payload;
  }
  return state;
}
const reducers = combineReducers({
  bake,
  size,
  theme,
  appLists,
  hydration,
  recipe,
  windowSize,
  readMore,
});

export default reducers;
