import {useState} from "react";
import Modal from "react-modal";
import {EditContact} from "../contact/EditContact";

export const Table = ({ contacts, handleSelectContact, handleEditContact }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editContact, setEditContact] = useState(contacts[0]);
    const [editContactIndex, setEditContactIndex] = useState(0);

    const setContactToEdit = (contact) => {
        setEditContact(contact)
    }

    const setContactIndexToEdit = (index) => {
        setEditContactIndex(index)
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-black">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone Number</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Email</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Address</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Longitude</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Latitude</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    { contacts.map(
                        (contact, index) => (
                            <tr key={index} className="">
                                <th className="font-normal text-gray-900">
                                    <div className="pl-5 py-4">
                                        {contact.name}
                                    </div>
                                </th>

                                <td>
                                    <div className="pl-5 py-4">
                                        {contact.phoneNumber}
                                    </div>
                                </td>

                                <td>
                                    <div className="pl-5 py-4">
                                        {contact.email}
                                    </div>
                                </td>

                                <td>
                                    <div className="pl-5 py-4">
                                        {contact.address[0]}
                                    </div>
                                </td>

                                <td>
                                    <div className="pl-5 py-4">
                                        {contact.longitude}
                                    </div>
                                </td>

                                <td>
                                    <div className="pl-5 py-4">
                                        {contact.latitude}
                                    </div>
                                </td>

                                <td className="px-5 py-4">
                                    <div className="flex justify-end gap-4">
                                       <div onClick={() => (handleSelectContact(contact))} className="border border-blue-500 p-2 rounded hover:bg-blue-500 transition cursor-pointer">
                                           Display
                                       </div>

                                        <a onClick={() => {
                                            openModal()
                                            setContactToEdit(contact)
                                            setContactIndexToEdit(index)
                                        }} x-data="{ tooltip: 'Edite' }">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                                x-tooltip="tooltip"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </a>

                                        <Modal
                                            isOpen={isModalOpen}
                                            onRequestClose={closeModal}
                                            style={{
                                                overlay: {
                                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                    zIndex: 100,
                                                },
                                                content: {
                                                    maxWidth: "fit-content",
                                                    maxHeight: "80vh",
                                                    margin: "auto",
                                                    background: "#4BB7D4",
                                                    borderRadius: "1rem",
                                                    padding: "1rem",
                                                },
                                            }}
                                        >
                                            <EditContact
                                                handleEditContact={handleEditContact}
                                                contactToEdit={editContact}
                                                index={editContactIndex}
                                            />
                                        </Modal>
                                    </div>
                                </td>
                            </tr>
                        )
                    ) }
                </tbody>
            </table>
        </div>
    )
}