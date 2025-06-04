import React from 'react';
import { EventCard } from './EventCard';
import './styles.css';

const EventList = () => {
  return (
    <ul className="grid-list">
      <EventCard
        cardNumber={1}
        cardTitle="美食，风味"
        cardDate="2024/09/15"
        cardDescription="美味到让你想用眼睛品尝。"
      />
      <EventCard
        cardNumber={2}
        cardTitle="健康美食"
        cardDate="2024/04/08"
        cardDescription="一场庆祝健康的美食盛宴，提供美味、营养和健康的佳肴。"
      />
    </ul>
  );
};

export { EventList }; 