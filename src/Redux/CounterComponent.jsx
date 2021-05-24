import React, { useState } from 'react'

function CounterComponent() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>the count:{count}</h4>
            <button>increment</button>
            <button>decrement</button>
        </div>
    )
}

export default CounterComponent
