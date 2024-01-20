// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Board from './components/Board';

const App = () => {
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="board">
        <Board grouping={grouping} sorting={sorting} tickets={tickets} users={users} />
      </div>
    </div>
  );
};

export default App;
