import React from 'react';
import { ServiceCard } from './ServiceCard';
import './styles.css';

const ServiceList = () => {
  return (
    <ul className="grid-list">
      <ServiceCard
        cardNumber={1}
        cardTitle="Noodles"
      />
      <ServiceCard
        cardNumber={2}
        cardTitle="Appetizers"
      />
      <ServiceCard
        cardNumber={3}
        cardTitle="Poke Bowls"
      />
    </ul>
  );
};

export { ServiceList }; 