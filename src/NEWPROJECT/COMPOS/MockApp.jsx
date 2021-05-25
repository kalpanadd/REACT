import React from 'react'

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function MockApp() {
    return (
        <div className='ui container'>
            <Header />
            <AddContact />
            <ContactList />
        </div>
    )
}

export default MockApp
