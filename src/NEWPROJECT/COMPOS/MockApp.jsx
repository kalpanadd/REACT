import React from 'react'

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function MockApp() {

    const contacts = [
        {
            id: "1",
            name: "Dipa",
            email: "deep@email.com"
        },
        {
            id: "2",
            name: "lipa",
            email: "leap@email.com"
        },
        {
            id: "3",
            name: "hipa",
            email: "hipa@email.com"
        }

    ]

    return (
        <div className='ui container'>
            <Header />
            <AddContact />
            <ContactList contactsss={contacts} />
        </div>
    )
}

export default MockApp
