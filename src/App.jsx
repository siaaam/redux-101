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

import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from './store/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

// store.subscribe(() => console.log(store.getState()));

// // raising event or action
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(incrementByValue(15));
// store.dispatch(decrement());
// store.dispatch(reset());

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count.value}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(incrementByValue(10))}>
        incrementByValue
      </button>
    </>
  );
}

export default App;
