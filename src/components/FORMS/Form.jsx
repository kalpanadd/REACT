import React, { useState } from 'react';

function Form() {

    const [state, setState] = useState()
    //console.log(state);

    function handleInput(e) {
        console.log(e.target.value);
        setState(e.target.value);
    }
    //internal styling
    const formInput = {
        padding: "15px",
        width: "250px",
        backgroundColor: "red",
        border: 'none',
        outline: 'none',
        color: 'white',
        fontWeight: '5px'

    }

    function handleSubmit(e) {
        alert(state);
        e.preventDefault(); //to avoid page refreshment after submission

    }

    return (

        <div>
            <form onSubmit={handleSubmit} >
                <label>name:</label><br />
                <input type='text' value={state} onChange={handleInput} style={formInput} /><br />
                <input type='submit' />
            </form>

        </div>
    )
}

export default Form;
