import React from 'react'
import Welcome from './Welcome'

function App2() {   //App2 here is parent component and welcome is child component
    return (
        <div>
            <Welcome firstname='johnn' lastname='smith' age='30' occupation='doctor' id='1' />

        </div>
    )
}

export default App2
