import React from 'react'
import './Todo1.css';



function List({ list, updateItems }) {
    console.log(list, updateItems);
    //console.log(props);

    const handleDelete = key => {
        const newList = list.filter((data) => {
            return data.id !== key;

        }
        )
        updateItems(newList);
    };
    return (
        <div>
            {list.map((data) =>
                <div key={data.id} className='todolistbtn'>
                    <h4 >{data.item}</h4>
                    {data.item && <button onClick={() => handleDelete(data.id)}>delete</button>}
                </div>
            )}

        </div >

    )
}

export default List
