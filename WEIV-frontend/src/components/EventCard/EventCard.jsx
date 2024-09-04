import './style/event-card-style.css'

export const EventCard = ({ image, title }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};