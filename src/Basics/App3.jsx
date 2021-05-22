import React from 'react'
import Welcome from './Welcome';

//probably this data might be coming from backend or api
const employeeData = [
    {
        firstname: "john",
        lastname: "ducket",
        occupation: "doctor",
        age: 44,
        id: 1

    },

    {
        firstname: "malinga",
        lastname: "andrews",
        occupation: "nurser",
        age: 40,
        id: 2

    },
    {
        firstname: "salmon",
        lastname: "joseph",
        occupation: "engineer",
        age: 48,
        id: new Date().getTime().toString()

    },
    {
        firstname: "lenin",
        lastname: "andrews",
        occupation: "driver",
        age: 34,
        id: 4


    },
    {
        firstname: "mac",
        lastname: "edite",
        occupation: "employee",
        age: 54,
        id: 5

    },
    {
        firstname: "monique zen",
        lastname: "zenithem",
        occupation: "teacher",
        age: 24,
        id: 6

    },
    {
        firstname: "elen",
        lastname: "musking",
        occupation: "professor",
        age: 34,
        id: 7

    },
    {
        firstname: "reeta",
        lastname: "ducket",
        occupation: "dietician",
        age: 24,
        id: 8

    }
]


function App3() {
    return (
        <div>
            {employeeData.map((data) => {
                const { firstname, lastname, occupation, age, id } = data;
                return <Welcome firstname={firstname} lastname={lastname} occupation={occupation} age={age} id={id} />

            })}

        </div>
    )
}

export default App3



/*function App3() {
    return (  //generally here 13times same component rendered but if there are 100timess to render that time this copy paste approach wil not workmost of the toimes this data comes from backend so may containe 100000s data may contain  hence mapping is useds
        <div>
            <Welcome firstname='joseph' lastname='andrews' occupation='painter' age='45' />
            <Welcome firstname='joseph2' lastname='andrews1' occupation='lawyer' age='40' />
            <Welcome firstname='joseph3' lastname='andrews2' occupation='doctr' age='55' />
            <Welcome firstname='joseph4' lastname='andrews3' occupation='enger' age='65' />
            <Welcome firstname='joseph5' lastname='andrews4' occupation='teacher' age='75' />
            <Welcome firstname='joseph6' lastname='andrews5' occupation='musician' age='45' />
            <Welcome firstname='joseph7' lastname='andrews6' occupation='mechanic' age='35' />
            <Welcome firstname='joseph8' lastname='andrews7' occupation='pilot' age='44' />
            <Welcome firstname='joseph9' lastname='andrews8' occupation='driver' age='41' />
            <Welcome firstname='joseph10' lastname='andrews9' occupation='dancer' age='42' />
            <Welcome firstname='joseph11' lastname='andrews10' occupation='director' age='43' />
            <Welcome firstname='joseph12' lastname='andrews11' occupation='artist' age='44' />

        </div>
    )
}

export default App3*/
