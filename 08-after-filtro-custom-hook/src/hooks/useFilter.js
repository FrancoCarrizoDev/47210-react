import { useState } from 'react';

const useFilter = (initialFilter = 'all') => {
  const [filter, setFilter] = useState(initialFilter);

  const applyFilter = (tasks) => {
    if (filter === 'all') {
      return tasks;
    } else if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;