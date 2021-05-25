//using class component and without destructuring
import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

class ContactList extends Component {

    render() {

        const renderList = this.props.clientsss.map((client) => {
            return (
                <div key={client.id}>
                    <h4>{client.name}</h4>
                    <h4>{client.email}</h4>
                    <button style={{ cursor: 'pointer' }}><DeleteIcon /></button>

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




