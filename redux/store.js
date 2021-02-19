import reducers from './reducer'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store
