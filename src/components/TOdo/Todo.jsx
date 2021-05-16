import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([]);
    const [display, setDisaplay] = useState([]);

    function handleChange(e) {
        //console.log(e.target);
        setTodo([e.target.value]);
        console.log(todo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisaplay([...display, ...todo]);
        console.log(display);
        setTodo('');


    }
    return (
        <div>
            <form>
                <input type='text' placeholder='enter your todo' value={todo} onChange={handleChange} />
                <input type='submit' onClick={handleSubmit} />
            </form>
            <div>
                {display.map((todos) => (<li>{todos}</li>))}
            </div>
        </div>
    )
}

export default Todo;
