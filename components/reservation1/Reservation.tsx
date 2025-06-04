import React from 'react';
import { ReservationForm } from './ReservationForm';
import './styles.css';

const Reservation = () => {
  return (
    <section className="reservation">
      <div className="container">
        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation; 