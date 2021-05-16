import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TodoApi() {
    const [todos, setTodos] = useState();
    useEffect(async () => {
        try {

            let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log(res);
            setTodos(res.data);


        } catch (err) {
            console.log(`${err.message}`)
        }

    }, [])
    console.log(todos);
    return (

        <div>

            {todos && todos.map((todo) => {
                const { title, completed } = todo;
                return (
                    <div key={todo.id}>
                        <p>{title}</p>
                        <p>{completed}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default TodoApi
