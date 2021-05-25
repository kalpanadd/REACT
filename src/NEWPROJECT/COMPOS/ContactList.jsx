import React from 'react'

function ContactList({ contactsss }) {
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

export default ContactList
