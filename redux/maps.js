import * as action from './actions'

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      bake: state.bake,
      size: state.size,
      theme: state.theme,
      bakeList: state.appLists.bakeList,
      sizeList: state.appLists.sizeList,
      hydration: state.hydration,
      windowSize: state.windowSize,
      readMore: state.readMore
    }
}
const mapDispatchToProps = { 
  toggleTheme: action.toggleTheme,
  setHydration: action.setHydration,
  getWindowSize: action.getWindowSize,
  toggleReadMore: action.toggleReadMore
 }

export {mapDispatchToProps, mapStateToProps};