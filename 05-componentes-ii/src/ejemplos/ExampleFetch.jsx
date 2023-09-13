import { useEffect, useState } from "react";

const END_POINT = "https://jsonplaceholder.typicode.com/todos/1";

export const ExampleFetch = () => {
  const [user, setUser] = useState(null);

  const callApi = () => {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {!user ? "LOADING" : JSON.stringify(user)}

      <button onClick={callApi}></button>
    </div>
  );
};
