import React from 'react'

const employees = [
    {
        name: 'teena1',
        id: '1'
    },
    {
        name: 'leena',
        id: '2'
    },
    {
        name: 'veena',
        id: '3'
    },
    {
        name: 'meena',
        id: '4'
    },
    {
        name: 'heena',
        id: '5'
    },
    {
        name: 'sheena',
        id: '6'
    }
]


/*function Maps2() {
    return (
        <div>
            {employees.map((emp) => {
                return (
                    <h1>{emp.name}</h1>
                )
            })}
        </div>
    )
}

export default Maps2*/


//destructuring inside map method
/*function Maps2() {
    return (
        <div>
            {employees.map((emp) => {
                const { name } = emp;
                return (
                    <h1>{name}</h1>
                )
            })}
        </div>
    )
}

export default Maps2*/

//shorthand
/*function Maps2() {
    return (
        <div>
            {employees.map((emp) =>

                <h1>{emp.name}</h1>
            )}
        </div>
    )
}

export default Maps2*/


function Maps2() {
    return (
        <div>
            {employees.map((emp) => {
                return (
                    <>
                        <h1>{emp.name}</h1>
                        <h6>{emp.id}</h6>
                    </>
                )

            })}
        </div>
    )
}

export default Maps2
