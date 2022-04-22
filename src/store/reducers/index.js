import { combineReducers } from 'redux';
import { countReducer } from './countReducer';

const rootReducers = combineReducers({
  count: countReducer,
  another: 30,
});

export default rootReducers;
