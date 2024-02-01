import {Table} from "./Table";
import {Map} from "./Map";
import {useState} from "react";

export const Dashboard = ({ contacts, handleEditContact }) => {
    const [selectedContact, setSelectedContact] = useState({
        latitude: '53.338741',
        longitude: '-6.261563'
    });

    const handleSelectContact = (contact) => {
        setSelectedContact({
            latitude: `${contact.latitude}`,
            longitude: `${contact.longitude}`
        })
    }

    return(
        <>
            <Table
                handleEditContact={handleEditContact}
                handleSelectContact={handleSelectContact}
                contacts={contacts}
            />
            <Map
                selectedContact={selectedContact}
            />
        </>
    )
}