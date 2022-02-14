import React, {useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [duplicateName, hasDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!duplicateName) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const duplicate = contacts.find((contact) => contact.name === name);
    if (duplicate !== undefined) {
      hasDuplicateName(true);
    }else{
      hasDuplicateName(false);
    }
    
  }, [name, duplicateName]);

  return (
    <div>
      <section>
        <h2>Add Contact { duplicateName ? " - Contact Already Exists! Please Add A New Contact" : "" }</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
