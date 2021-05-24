import React from 'react'

function CounterComponent({ count, setcount }) {

    function increment() {
        setcount(count + 1)
    }

    function decrement() {
        setcount(count - 1)
    }

    return (
        <div>
            <h4>the count:{count}</h4>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default CounterComponent
