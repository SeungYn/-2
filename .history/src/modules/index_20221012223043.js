import { combineReducers } from 'redux';
import counters from './counter';
import todos from './todo';

const rootReducer = combineReducers({ counters, todos });
console.log(counter);
console.log(rootReducer);
export default rootReducer;
