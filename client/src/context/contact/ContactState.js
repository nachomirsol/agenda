import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './ContactReducer';
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, FILTER_CONTACTS, SET_CURRENT, CLEAR_CURRENT, CLEAR_FILTER } from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                type: "personal",
                id: "5d6a278407b8f60e47c8ae68",
                name: "lucia",
                email: "luciamonica@gmail.com",
                phone: "123-4567844"

            },
            {
                type: "personal",
                id: "5d6a186c1d75a90a909bd5be",
                name: "elmo",
                email: "cookie1@gmail.com",
                phone: "123-4567844"
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>

    )
}

export default ContactState