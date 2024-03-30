import React from "react";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
