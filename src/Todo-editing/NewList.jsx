import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function NewList({ todos, setdos }) {
    console.log(todos, setdos);

    function deleteTodo({ id }) {
        setdos(todos.filter((task) => task.id !== id))
        console.log(todos);


    }
    return (
        <div>
            {todos.map((item) => {
                const { id, todo } = item;
                return (
                    <>
                        <div key={id} className='newlist'>
                            {todo}
                            <span
                                className='deleteicon'
                                onClick={() => deleteTodo(item)}

                            ><DeleteIcon /></span>

                        </div>
                    </>
                )

            })}
        </div>
    )
}

export default NewList
