import React from "react";

export const ContactForm = (props) => {

  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit 
  } = props;

  const phoneNumberRegex = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}";

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Contact Name"
          value={name}
          onChange={ (e) => setName(e.target.value) }
          required
        />
      </label>
      <label>
        <input
        type="tel"
        placeholder="###-###-####"
        value={phone}
        onChange={ (e) => setPhone(e.target.value) }
        required pattern={phoneNumberRegex}
        />
      </label>
      <label>
        <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
        required
        />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};
