import React, { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";


export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, time, date);
    setTitle('');
    setContact('');
    setTime('');
    setDate('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title} setTitle={setTitle}
          contact={contact} setContact={setContact}
          time={time} setTime={setTime}
          date={date} setDate={setDate}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          tiles={appointments}
        />
      </section>
    </div>
  );
};
