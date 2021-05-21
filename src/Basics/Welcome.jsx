import React from 'react'
import './Welcome.css'

function Welcome(props) {
    console.log(props);
    return (
        <div className='welcomediv'>
            <p>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome
