import { useEffect, useState } from "react";

const ExampleUseEffect = () => {
  const [laps, setLaps] = useState(0);
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  useEffect(() => {
    setTimeInSeconds(0);

    const intervalId = setInterval(() => {
      setTimeInSeconds((timeInSeconds) => timeInSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [laps]);

  if (laps === 5) {
    return <h1>TERMINASTE</h1>;
  }

  return (
    <div className="App">
      <p>{laps}</p>
      <p>Tiempo en segundos: {timeInSeconds}</p>
      <button onClick={() => setLaps((laps) => laps + 1)}>
        {" "}
        Finalizar vuelta{" "}
      </button>
    </div>
  );
};

export default ExampleUseEffect;
