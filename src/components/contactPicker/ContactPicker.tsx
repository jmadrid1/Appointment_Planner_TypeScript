import React from "react";

export const ContactPicker = (props) => {

  const { name, onChange, contacts  } = props;

  return (
    <select name={name} onChange={onChange}>
      <option  key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
