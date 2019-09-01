import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {

    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext

    return (
        <>
        {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
        ))}
        </>
    )
}

Contacts.propTypes = {

}

export default Contacts
