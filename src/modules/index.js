import { combineReducers } from 'redux';
import counters from './counter';
import todos from './todo';

const rootReducer = combineReducers({ counters, todos });
console.log(counters);
console.log(rootReducer);
export default rootReducer;
