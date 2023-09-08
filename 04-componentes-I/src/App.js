import { useState } from "react";

const Button = ({callback, text}) => {
  return <button onClick={callback}>{text}</button>
}

const ParentComponent = ({text}) => {


  const handleClick = () => {
    console.log(text)
  }

  return <Button callback={handleClick} text={text} />
}


const ParentComponentAlert = ({text}) => {


  const handleClick = () => {
    alert(text)
  }

  return <Button callback={handleClick} text={text} />
}



function App() {
  // Ejemplo de un contador
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'grid', placeContent: 'center center', height: '100vh'}}>
      <button onClick={() => setCount(count + 1)}>
      {count}
      </button>

      {/* <ParentComponent text="Hola mundo" /> */}

      {/* <ParentComponentAlert text="Hola mundo" /> */}
    </div>
  );

  // Los componentes ParentComponent y ParenComponentAlert están comentados, para verlos en acción, descomentarlos quitando las llaves y el asterisco que abren y cierran.
}

export default App;
