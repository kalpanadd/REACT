//props and props destructuring
import React from 'react'

/*function Welcome(props) {
    console.log(props);
    return (
        <div>
            <p key={id}>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome*/


/*function Welcome(props) {
    console.log(props);
    const { firstname, lastname, occupation, age } = props; // object destructuring
    return (
        <div>
            <p key={id}>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome*/




/*function Welcome({ firstname, lastname, age, occupation, id }) {       //as this fn definately expects props as parameters hence directly destructuring

    return (
        <div>
            <p key={id}>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>
        </div>
    )
}

export default Welcome*/


//sent props by spread operator
/*function Welcome(props) {
    console.log(props);
    return (
        <div>
            <p key={props.id}>welcome to {props.firstname} {props.lastname} aged {props.age} who is {props.occupation}</p>
        </div>
    )
}

export default Welcome*/


//sent props by spread operator
function Welcome(props) {
    console.log(props);
    const { firstname, lastname, occupation, age, id } = props;

    return (
        <div>
            <p key={id}>welcome to {firstname} {lastname} aged {age} who is {occupation}</p>

        </div>
    )
}

export default Welcome