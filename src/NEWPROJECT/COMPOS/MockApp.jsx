import React, { useEffect, useState } from 'react'

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function MockApp() {

    //const LOCAL_STORAGE_KEY = 'contacts';

    const [contacts, setContacts] = useState([]);

    /*const contacts = [
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

    ]*/
    const addContactHandlerrr = (usercontacts) => {
        console.log(usercontacts)
        setContacts([...contacts, { id: uuid(), ...usercontacts }])
        console.log(contacts);

    }

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        })

        setContacts(newContactList);
    }

    /*useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) {
            setContacts(retrieveContacts);

        }

    }, [contacts])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

    }, [contacts]);*/




    return (
        <div className='mockapp'>
            <Router>

                <Header />

                <Switch>
                    <Route path='/add' component={() => (<AddContact addContactHandler={addContactHandlerrr} />)} />
                    <Route path='/' exact component={() => (<ContactList contactsss={contacts} getContactId={removeContactHandler} />)} />

                </Switch>


            </Router>
        </div>
    )
}

{/*</Switch><AddContact addContactHandler={addContactHandlerrr} />
<ContactList contactsss={contacts} getContactId={removeContactHandler} />*/}


export default MockApp
