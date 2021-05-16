import React, { useState } from 'react'

function Signin() {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        emailid: '',
        password: '',
        phonenumber: ''
    });

    const [display, setDisplay] = useState([]);


    function handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        setState({ ...state, [field]: value })
    }


    function handleSubmit(e) {
        e.preventDefault();
        const registered = [{ ...state, id: new Date().getTime().toString() }];
        console.log(registered);
        setDisplay(registered);
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
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label><br />
                <input type='text' placeholder='enter first name' value={state.firstname} name='firstname' onChange={handleChange} style={formfields} /><br /><br />
                <label>Last Name:</label><br />
                <input type='text' placeholder='enter last name' value={state.lastname} name='lastname' onChange={handleChange} style={formfields} /><br /><br />
                <label>Email id:</label><br />
                <input type='email' placeholder='enter email' value={state.emailid} name='emailid' onChange={handleChange} style={formfields} /><br /><br />
                <label>password:</label><br />
                <input type='password' placeholder='enter password' value={state.password} name='password' onChange={handleChange} style={formfields} /><br /><br />
                <label>phone number:</label><br />
                <input type='number' placeholder='enter phone number' value={state.phonenumber} name='phonenumber' onChange={handleChange} style={formfields} /><br /><br /><br />
                <input type='submit' />
            </form>

            <div>
                {display.map((data) => {
                    return (<h3>{data.firstname}<br />{data.lastname}<br />{data.emailid}</h3>)

                })}


            </div>

        </>
    )
}

export default Signin
