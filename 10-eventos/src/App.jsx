import { useState } from "react";
import "./App.css";
export default function App() {
  const [texto, setTexto] = useState("");

  const handleKeyDown = (e) => {
    // Obtenemos la tecla presionada a partir del evento
    const teclaPresionada = e.key.toLowerCase();

    // Definimos una lista de vocales
    const vocales = ["a", "e", "i", "o", "u"];

    // Si la tecla presionada es una vocal, cancelamos el evento
    if (vocales.includes(teclaPresionada)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    // Actualizamos el estado con el valor del input
    setTexto(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ingresa texto sin vocales"
      />
    </div>
  );
}
