//using class component and without destructuring
import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

import user from '../PICS/user.png'
import './newstyles.css'
class ContactList extends Component {

    render() {

        const renderList = this.props.clientsss.map((client) => {
            return (
                <div key={client.id} className='button-div'>
                    <div className='list-div' style={{ border: '5px solid black', borderRadius: '15px' }}>
                        <img src={user} style={{ width: 30 }} />
                        <h4>{client.name}</h4>
                        <h4>{client.email}</h4>

                        <span style={{ cursor: 'pointer' }}><DeleteIcon /></span>
                    </div>


                </div>
            )
        })


        return (
            <div>
                {renderList}
            </div>
        )
    }
}


export default ContactList



/*function ContactList({ contactsss }) {
    return (
        <div>
            <div className='ui celled list'>
                {contactsss.map((client) => {
                    const { name, email, id } = client;
                    return (
                        <div key={id}>
                            <h4>{name}</h4>
                            <h5>{email}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactList*/




