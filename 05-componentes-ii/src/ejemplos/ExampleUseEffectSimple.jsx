import { useEffect, useState } from "react";

const ExampleUseEffectSimple = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Juan");

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count > 5) {
      setName("Pedro");
      if (count > 7) {
        setName("Carlos");
      }
    }
  }, [count]);

  return (
    <div>
      <p>{name}</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default ExampleUseEffectSimple;
