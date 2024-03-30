import React from "react";
const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <input type="number" name="number" />
      <button type="submit"> Add new Contact</button>
    </form>
  );
};

export default ContactForm;
