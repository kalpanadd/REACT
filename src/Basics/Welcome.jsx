//props and props destructuring
import React from 'react'

/*function Welcome(props) {
    console.log(props);
    return (
        <div className='welcomediv'>
            <p key={id}>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome*/


/*function Welcome(props) {
    console.log(props);
    const { firstname, lastname, occupation, age } = props; //destructuring
    return (
        <div className='welcomediv'>
            <p key={id}>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome*/




/*function Welcome({ firstname, lastname, age, occupation, id }) {       //as this fn definately expects props as parameters hence directly destructuring

    return (
        <div className='welcomediv'>
            <p key={id}>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome*/


function Welcome(props) {       //sent props by spread operator
    console.log(props);
    return (
        <div className='welcomediv'>
            <p key={props.id}>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome