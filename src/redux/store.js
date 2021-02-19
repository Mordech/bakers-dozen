import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export default store;
