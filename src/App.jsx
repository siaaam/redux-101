import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from './features/counter/counterSlice';
import { getAllTodos } from './features/todo/todoSlice';

function App() {
  const count = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

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
