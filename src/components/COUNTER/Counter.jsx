import { useState } from 'react';
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(0);
    const [upcolor, setUpColor] = useState(false);
    const [downcolor, setDownColor] = useState(false);
    const [reset, setReset] = useState('');


    function Upcount() {
        setCount(count + 1);
        setUpColor(true);
        setReset(false);
        setDownColor(false);


    }
    function Downcount() {
        setCount(count - 1);
        setUpColor(false);
        setDownColor(true);
        setReset(false);
    }
    function Reset() {
        setCount(count - count);
        setReset(true);
        setUpColor(false);
        setDownColor(false)
    }
    return (
        <div className="App">
            <h3>The count is:{count}</h3>
            <br />
            <button onClick={Upcount} className={upcolor ? 'btn-upcount btn' : ''}>Upcounter</button><br />
            <button onClick={Downcount} className={downcolor ? 'btndowncount btn' : ''}>Downcounter</button><br />
            <button onClick={Reset} className={reset ? 'btnreset btn' : ''}>Reset</button>
        </div>

    );
}

export default Counter;
//<button className='btn' onClick={() => setCount(count + 1)}>Upcounter</button><br />
//<button className='btn' onClick={() => setCount(count - 1)}>Downcounter</button>
