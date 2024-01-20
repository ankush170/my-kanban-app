import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default Card;
