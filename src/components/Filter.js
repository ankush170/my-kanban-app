// Filter.js
import React, { useState, useEffect, useRef } from 'react';

const Filter = ({ onFilterChange, onSortChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    onFilterChange(value);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    onSortChange(value);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="filter" ref={dropdownRef}>
      <button className="display-btn" onClick={handleDropdownClick}>
        <span>Display</span><i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'}`}></i>
      </button>
      {showDropdown && (
        <div className="options">
          <div>
            <span>Grouping</span>
            <select onChange={(e) => handleGroupByChange(e.target.value)} value={groupBy}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <span>Ordering</span>
            <select onChange={(e) => handleSortByChange(e.target.value)} value={sortBy}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
