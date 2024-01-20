import React from 'react';
import Filter from './Filter';

const Header = ({ onFilterChange, onSortChange }) => {
  return (
    <header className="header">
      <div className="container">
        <Filter onFilterChange={onFilterChange} onSortChange={onSortChange} />
      </div>
    </header>
  );
};

export default Header;
