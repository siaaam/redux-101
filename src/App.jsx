import './App.css';

// flow

// store - from where you manage data
// reducer - function that manipulate or result ultimate data
// dispatching(raising) action  or event - click,hover,scroll
// action creator - function that create a action or event

// component - dispatch action creator - real action - reducer - store
//store - component access

// store
// reducer
// action creator
// action

// action
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENTBYVALUE = 'INCREMENTBYVALUE';

import { combineReducers, legacy_createStore as createStore } from 'redux';

const initialState = {
  value: 0,
};

// reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    case RESET:
      return {
        value: 0,
      };
    case INCREMENTBYVALUE:
      return {
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

// combine reducers
const rootReducers = combineReducers({
  count: countReducer,
  another: 30,
});

// store
const store = createStore(rootReducers);

// action creator

const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};
const reset = () => {
  return { type: RESET };
};
const incrementByValue = (num) => {
  return { type: INCREMENTBYVALUE, payload: num };
};

store.subscribe(() => console.log(store.getState()));

// raising event or action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementByValue(15));
store.dispatch(decrement());
store.dispatch(reset());

function App() {
  return (
    <>
      <p>10</p>
      <button>increment</button>
      <button>decrement</button>
    </>
  );
}

export default App;
