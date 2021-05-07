import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);




  return (
    <div className="App">
      <h3>The count is:{count}</h3>
      <br />
      <button className='btn' onClick={() => setCount(count + 1)}>Upcounter</button><br />
      <button className='btn' onClick={() => setCount(count - 1)}>Downcounter</button>
    </div>
  );
}

export default App;
