import React from 'react'

const employees = [
    {
        name: 'teena',
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

function Maps2() {
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

export default Maps2
