import React, { Component } from 'react'
import './newstyles.css';

import { Link } from 'react-router-dom';

class AddContact extends Component {

    state = {
        name: "",
        email: "",

    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert('all fields are mandatory')
            return
        }
        console.log(this.state);
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" })
    }

    render() {
        return (
            <div className='ui main'>
                <h2 className='button-div'>Add Contact</h2>
                <Link to='/add'>
                    <button>Add contact</button>
                </Link>
                <form className='ui form' onSubmit={this.add}>

                    <div className='button-div'>
                        <label>Name:</label><br />
                        <input type='text'
                            className='inputfield'
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: (e.target.value) })} />
                    </div><br />

                    <div className='button-div'>
                        <label>Email:</label><br />
                        <input type='text'
                            className='inputfield'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: (e.target.value) })} />
                    </div><br />

                    <div className='button-div'>
                        <button className='ui-button'>Add</button>
                    </div>

                </form>


            </div>
        )
    }
}

export default AddContact
