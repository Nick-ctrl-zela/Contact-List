import { useState, useEffect } from 'react';
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
const [contact, setContact] = useState(null);

useEffect(() => {
    async function fetchContact () {
        try {
            const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            )
            const result = await response.json();
            setContact(result)
            console.log(result)
        }
        catch (error){
            console.error(error);
        }
    }
    if (selectedContactId) {
        fetchContact();
    }
    }, [selectedContactId]);

    return (
    <div>
        {contact ? (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
        ) : (
        <p>No contact selected</p>
        )}
    </div>
    );
}