import * as action from '../../redux/actions'

const mapBakesProps = (state /*, ownProps*/) => {
  return {
    value: state.bake,
    list: state.appLists.bakeList,
    theme: state.theme
  }
}

const mapBakesDispach = {
  toggle: action.toggleGoods,
}

const mapSizeProps = (state /*, ownProps*/) => {
  return {
    value: state.size,
    list: state.appLists.sizeList,
    theme: state.theme
  }
}

const mapSizeDispach = {
  toggle: action.toggleSize,
}

export { mapBakesProps, mapBakesDispach, mapSizeProps, mapSizeDispach }