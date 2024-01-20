// Board.js
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Board = ({ grouping, sorting, tickets, users }) => {
  const [groupedAndSortedTickets, setGroupedAndSortedTickets] = useState({});

  useEffect(() => {
    const groupAndSortTickets = () => {
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const groupValue =
          grouping === 'status'
            ? ticket.status
            : grouping === 'user'
            ? users.find((user) => user.id === ticket.userId)?.name || 'Unassigned'
            : ticket.priority;

        acc[groupValue] = acc[groupValue] || [];
        acc[groupValue].push(ticket);
        return acc;
      }, {});

      for (const group in groupedTickets) {
        groupedTickets[group].sort((a, b) => {
          if (sorting === 'priority') {
            return b.priority - a.priority;
          } else if (sorting === 'title') {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      }

      setGroupedAndSortedTickets(groupedTickets);
    };

    groupAndSortTickets();
  }, [grouping, sorting, tickets, users]);

  const renderCards = () => {
    return Object.keys(groupedAndSortedTickets).map((group) => (
      <div key={group}>
        <h2>{group}</h2>
        {groupedAndSortedTickets[group].map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    ));
  };

  return <div className="card-container">{renderCards()}</div>;
};

export default Board;
