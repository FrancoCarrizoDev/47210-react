import React from 'react';

const FilterOptions = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filtrar:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
};

export default FilterOptions;