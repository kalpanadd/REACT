import React, { useState } from 'react'
import './Todo1.css';
import List from './List';
function Todo1() {
    const [todo, setTodo] = useState('');
    const [items, setItems] = useState([]);


    function handleChange(e) {
        setTodo(e.target.value);
        console.log(todo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(todo);
        setItems([...items, { item: todo, id: new Date().getTime().toString() }])
        console.log(items);
        setTodo('')
    }
    return (
        <div className='todoapp'>
            <form onSubmit={handleSubmit} className='todoform'>
                <input type='text' placeholder='enter your todo work' value={todo} onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <List list={items} updateItems={setItems} />
        </div>
    )
}

export default Todo1
