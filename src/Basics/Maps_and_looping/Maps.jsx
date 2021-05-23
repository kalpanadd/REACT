import React from 'react'

const employees = [
    'lehey',
    'aaniee1',
    'maggie',
    'leesa',
    'tina',
    'neeta',
    'vineela'
]

/*function Maps() {      //here if there are 100s of data is there to display in realtime comes from backend hence below method will be used
    return (
        <div>
            <h1>hello {employees[0]}</h1>
            <h1>hello {employees[1]}</h1>
            <h1>hello {employees[2]}</h1>
            <h1>hello {employees[3]}</h1>
            <h1>hello {employees[4]}</h1>
            <h1>hello {employees[5]}</h1>

        </div>
    )
}

export default Maps*/

/*function Maps() {     //we can't use forEch for this kind of looping, we use mapping method of array is used because map will return array in output hence it returns each here h1 nodes of arrays 
    return (
        <div>
            {employees.forEach((emp) => {
                return (
                    <h1>{emp}</h1>
                )
            })}
        </div>
    )
}

export default Maps*/

function Maps() {     //mapping returns each time of array of items, here we don't use return statement as we are returning single jsx element
    return (
        <div>
            {employees.map((emp) => {
                return (
                    <h1>{emp}</h1>
                )
            })}
        </div>
    )
}

export default Maps


//shorthand method for returning--- squarely braces and return statement can be removed
/*function Maps() {     //mapping returns each time of array of items, here we don't use return statement as we are returning single jsx element
    return (
        <div>
            {employees.map((emp) => (
                <h1>{emp}</h1>
            ))}
        </div>
    )
}

export default Maps*/

