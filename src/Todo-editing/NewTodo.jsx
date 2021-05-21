import React, { useState } from 'react'
import '../Todo-editing/NewTodo.css'
import NewList from './NewList';

function NewTodo() {
    const [state, setState] = useState('');
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value);
        console.log(state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        { state !== '' && setTodo([...todo, { id: new Date().getTime().toString(), todo: state }]) }
        setState('');
        console.log(todo);
    }
    return (
        <div className='container'>
            <div className='flex-item'> Todo: </div>
            <div className='flex-item'>

                <form onSubmit={handleSubmit}>
                    <input
                        className='input-field'
                        type='text'
                        placeholder='enter todo'
                        value={state}
                        onChange={handleChange}

                    />
                    <button type='submit' className='add-button'>AddTodo</button>
                </form>
                <div>
                    <NewList todos={todo} setdos={setTodo} />

                </div>


            </div>

        </div>
    )
}

export default NewTodo
