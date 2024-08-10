import React from 'react';
import '../EventCategoryCard/style/event-category-card-style.css'

export const EventCategoryCard = ({ title, icon }) => {
  return (
    <div className="event-category-card">
      <img src={icon} alt={title} />
      <a href="/"><p>{title}</p></a>
    </div>
  );
};