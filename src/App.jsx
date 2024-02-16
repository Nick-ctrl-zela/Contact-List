import ContactList from './components/ContactList';
// import ContactRow from  './components/ContactRow'
import { useState } from 'react';
import './App.css'

function App() {
    const [contacts, setContacts] = useState()
    // const [selectedContactId, setSelectedContactId] = useState(null)

    console.log("Contacts: ", contacts);

    return (
        <>
            <ContactList />

        </>
    );
}

export default App
