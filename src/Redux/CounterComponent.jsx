import React from 'react'

function CounterComponent({ count, setcount }) {

    return (
        <div>
            <h4>the count:{count}</h4>
            <button>increment</button>
            <button>decrement</button>
        </div>
    )
}

export default CounterComponent
