import { useEffect, useState } from "react";
import "./styles.css";

const Contador = ({ onResize }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("HEY");
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <h2>ContadorComponent</h2>;
};

export default function LimpiarEventos() {
  const [showContador, setShowContador] = useState(false);

  const toggleContador = () => {
    setShowContador((prev) => !prev);
  };

  const onResize = (e) => {
    console.log(e);
  };

  const onInput = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>HOLA MUNDO</h1>
      {showContador && <Contador onResize={onResize} />}
      <div>
        <button onClick={toggleContador}>
          {showContador ? "OCULTAR" : "MOSTRAR"} CONTADOR
        </button>
        <input onMouseDown={onInput} />
      </div>
    </div>
  );
}
