import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todo';

const rootReducer = combineReducers({ counter, todos });
console.log(counter);
console.log(rootReducer);
export default rootReducer;
