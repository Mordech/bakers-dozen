import store from "../redux/store"

const isWide = (breakPoint) => store.getState().windowSize.width >= breakPoint;
const widthEqualTo = (breakPoint) => store.getState().windowSize.width == breakPoint;
const widthRange = (startPoint, endPoint) => store.getState().windowSize.width >= startPoint && store.getState().windowSize.width <= endPoint;

export default isWide
export { widthEqualTo, widthRange }