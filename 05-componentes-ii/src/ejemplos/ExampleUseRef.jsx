import { useRef, useState } from "react";

export const ExampleUseRef = () => {
  const divRef = useRef(null);
  const [counter, setCounter] = useState(0);

  console.log("render");

  const handleClick = () => {
    divRef.current.innerHTML = "Contenido Cambiado";
  };

  // const nombre = "Juan" --> Esto no es un estado y si su valor cambia, react no se entera

  // const cambiarNombre = () => {
  //   nombre = "Pedro";
  //   console.log(nombre);
  // };

  return (
    <div>
      <div ref={divRef}>Contenido Original</div>
      <button style={{ marginTop: "20px" }} onClick={handleClick}>
        Cambiar Contenido
      </button>

      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setCounter(counter + 1)}
        >
          {counter}
        </button>

        {/* <div>
          <button style={{ marginTop: "20px" }} onClick={cambiarNombre}>
            Cambiar nombre
          </button>
          <p>{nombre}</p>
        </div> */}
      </div>
    </div>
  );
};
