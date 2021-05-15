import React, { useState } from 'react'

function Signin() {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        phonenumber: ''
    });


    function handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        setState({ ...state, [field]: value })
    }


    function handleSubmit(e) {

        e.preventDefault();

        const registered = { ...state, id: new Date().getTime().toString() };


        console.log(registered);
        setState({ firstname: "", lastname: "", emailid: "", password: "", phonenumber: "" })

    }


    const formfields = {
        padding: "7px",
        width: '250px',
        backgroundColor: "wheat",
        border: 'none',
        outline: 'none'

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type='text' placeholder='enter first name' value={state.firstname} name='firstname' onChange={handleChange} style={formfields} /><br />
                <label>Last Name:</label>
                <input type='text' placeholder='enter last name' value={state.lastname} name='lastname' onChange={handleChange} style={formfields} /><br />
                <label>Email id:</label>
                <input type='email' placeholder='enter email' value={state.emailid} name='emailid' onChange={handleChange} style={formfields} /><br />
                <label>password:</label>
                <input type='password' placeholder='enter password' value={state.password} name='password' onChange={handleChange} style={formfields} /><br />
                <label>phone number:</label>
                <input type='number' placeholder='enter phone number' value={state.phonenumber} name='phonenumber' onChange={handleChange} style={formfields} /><br />
                <input type='submit' />
            </form>

            <div>


            </div>
        </div>
    )
}

export default Signin
