import './App.css';
import {SideBar} from "./components/SideBar";
import {AddContact} from "./components/AddContact";
import {useState} from "react";
import {Dashboard} from "./components/dashboard/Dashboard";

function App() {
    const [contacts, setContacts] = useState([]);

    const [page, setPage] = useState("contact");

    const handlePage = (page) => {
        setPage(page);
    }

    const handleAddContact = (contact) => {
        setContacts([...contacts, contact])
    }

    const handleEditContact = (index, contact) => {

        // setContacts([...contacts, contact]);
        setContacts(prevContacts => prevContacts
            .map(
                (prevContact, i) =>
                    (i === index ? contact : prevContact)
            )
        );
    }

  return (
    <>
        <main className="flex">
            <section>
                <SideBar
                    handlePage={handlePage}
                    currentPage={page}
                />
            </section>

            <section className="w-full">
                {
                    page === "contact" &&
                    <AddContact
                        handleAddContact={handleAddContact}
                    />
                }

                {
                    page === "dashboard" &&

                    <Dashboard
                        contacts={contacts}
                        handleEditContact={handleEditContact}
                    />
                }
            </section>
        </main>
    </>
  );
}

export default App;
