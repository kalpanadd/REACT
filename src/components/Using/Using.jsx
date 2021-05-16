import React, { useEffect, useState } from 'react'

function Using() {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log('useEffect ran');

    }, [state])
    return (
        <div>
            <h3>count:{state}</h3>
            <button onClick={() => setState(state + 1)}>clickme</button>
        </div>
    )
}

export default Using
