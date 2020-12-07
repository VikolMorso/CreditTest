import {combineReducers, createStore} from 'redux';
import CreditReduce from './credit-reduce';

let reducers = combineReducers({
  credit: CreditReduce,
});

let store = createStore(reducers);

export default store;
