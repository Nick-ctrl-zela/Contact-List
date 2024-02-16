import ContactList from './components/ContactList';
// import ContactRow from  './components/ContactRow'
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';
import './App.css'

function App() {
    const [contacts, setContacts] = useState()
    const [selectedContactId, setSelectedContactId] = useState(null)

    console.log("Contacts: ", contacts);

    return (
        <>
        <div> 
        {selectedContactId ? (
            <SelectedContact
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
        />
    ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
    )}
    </div>
        </>
    );
}

export default App;
