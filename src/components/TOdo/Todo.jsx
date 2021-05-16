import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([]);
    const [display, updateDisaplay] = useState([]);

    function handleChange(e) {
        //console.log(e.target);
        setTodo([e.target.value]);
        console.log(todo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateDisaplay([...display, { items: todo, id: new Date().getTime().toString() }]);
        console.log(display);
        setTodo('');


    }
    return (
        <div>
            <form>
                <input type='text' placeholder='enter your todo' value={todo} onChange={handleChange} />
                <input type='submit' onClick={handleSubmit} />
            </form>
            <>
                {display.map((todos) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', width: '150px' }}>
                            <h4>{todos.items}</h4>
                            <button>*</button>

                        </div>
                    )
                })}

            </>
        </div>
    )
}

export default Todo;
