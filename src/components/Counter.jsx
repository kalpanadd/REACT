import { useState } from 'react';
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState();

    function Upcount() {
        setCount(count + 1);
        setColor(true);

    }

    function Downcount() {
        setCount(count - 1);
        setColor(false);
    }


    return (
        <div className="App">
            <h3>The count is:{count}</h3>
            <br />
            <button className={color ? 'btn-upcount' : 'btn'} onClick={Upcount}>Upcounter</button><br />
            <button className={color ? 'btn' : 'btndowncount'} onClick={Downcount}>Downcounter</button>
        </div>
    );
}

export default Counter;
//<button className='btn' onClick={() => setCount(count + 1)}>Upcounter</button><br />
//<button className='btn' onClick={() => setCount(count - 1)}>Downcounter</button>
