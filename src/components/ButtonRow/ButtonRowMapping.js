import * as action from '../../redux/actions';

export const mapBakesProps = (state) => {
  return {
    value: state.bake,
    list: state.appLists.bakeList,
    theme: state.theme,
  };
};

export const mapBakesDispatch = {
  toggle: action.toggleGoods,
};

export const mapSizeProps = (state) => {
  return {
    value: state.size,
    list: state.appLists.sizeList,
    theme: state.theme,
  };
};

export const mapSizeDispatch = {
  toggle: action.toggleSize,
};
