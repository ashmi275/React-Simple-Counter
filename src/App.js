import './App.css';
import React, { useState } from 'react';



function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter Application</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export default App;
