import { useState } from "react";

function Filter({ children }) {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return children(filter, handleFilterChange);
}

export default Filter;
