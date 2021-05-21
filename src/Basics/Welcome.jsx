import React from 'react'
import './Welcome.css'

/*function Welcome(props) {
    console.log(props);
    return (
        <div className='welcomediv'>
            <p>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome*/


/*function Welcome(props) {
    console.log(props);
    const { firstname, lastname, occupation, age } = props; //destructuring
    return (
        <div className='welcomediv'>
            <p>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome*/



function Welcome({ firstname, lastname, occupation, age }) { //as this fn definately expects props as parameters hence directly destructuring
    return (
        <div className='welcomediv'>
            <p>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome
