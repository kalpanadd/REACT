import React from 'react'
import ContactCard from './ContactCard'


function ContactList({ contactsss, getContactId }) {  //destructuring
    const deleteContactHandler = (id) => {
        getContactId(id);

    }


    return (
        <div>
            <div>
                <ContactCard clientsss={contactsss} clickHandler={deleteContactHandler} />
            </div>
        </div>
    )
}

export default ContactList



//using class component and without destructuring
/*import React, { Component } from 'react'

class ContactList extends Component {

    render() {

        const renderList = this.props.contactsss.map((client) => {
            return (
                <div key={client.id}>
                    <h4>{client.name}</h4>
                    <h4>{client.email}</h4>
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


export default ContactList*/
