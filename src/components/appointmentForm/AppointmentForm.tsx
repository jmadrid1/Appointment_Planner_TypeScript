import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {

  const {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
  } = props;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Appointment Title"
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
          required
        />
      </label>
      <label>
        <ContactPicker
          name="contact"
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <label>
        <input
        type="date"
        placeholder="Date"
        value={date}
        min={getTodayString()}
        onChange={ (e) => setDate(e.target.value) }
        required
        />
      </label>
      <label>
        <input
        type="text"
        placeholder="Time"
        phone="time"
        value={time}
        onChange={ (e) => setTime(e.target.value) }
        required
        />
      </label>
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
