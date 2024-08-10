import React from 'react';
import { EventCard } from '../EventCard/EventCard';
import './style/event-grid-style.css'

export const EventGrid = () => {
  const eventCards = Array.from({ length: 15 }, (_, index) => ( // Gera 15 EventCards na tela
    <EventCard key={index} />
  ));

  return (
    <>
      <div className="event-grid">{eventCards}</div>
    </>
  );
};