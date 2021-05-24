import React, { useState } from 'react'
import CounterComponent from './CounterComponent'

function App4() {
    const [count, setCount] = useState(100)

    return (
        <div>
            <CounterComponent count={count} setcount={setCount} />
        </div>
    )
}

export default App4
