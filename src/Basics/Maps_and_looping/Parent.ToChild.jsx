import React from 'react'
import Maps3 from './Maps3';

const humanBeings = [
    {
        name: 'america',
        id: 1
    },
    {
        name: 'america',
        id: 2
    },
    {
        name: 'america',
        id: 3
    },
    {
        name: 'america',
        id: 4
    },
    {
        name: 'america',
        id: 5
    },
    {
        name: 'america',
        id: 6
    }
]

function ParentToChild() {
    return (
        <div>
            {humanBeings.map((hmn) => {
                const { name, id } = hmn;
                return (
                    <div key={id}>
                        <Maps3 Humans={name} id={id} />
                    </div>
                )
            })}

        </div>
    )
}

export default ParentToChild
