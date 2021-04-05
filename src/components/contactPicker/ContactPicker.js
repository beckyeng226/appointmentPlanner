
import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  return (
    <select onChange={onChange}
              name={name}
              required>
        <option 
          key={-1}
          value={""}
          selected="selected">
          No Contact Selected
        </option>
        {contacts.map((contact) => {
          return (
            <option
              key={contact}
              value={contact}>
            {contact}
            </option>);
        })}
      </select>
    )
  };
