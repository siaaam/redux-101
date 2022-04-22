import './App.css';

// flow

// store - from where you manage data
// reducer - function that manipulate or result ultimate data
// dispatching(raising) action  or event - click,hover,scroll
// action creator - function that create a action or event

// component - dispatch action creator - real action - reducer - store
//store - component access

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
