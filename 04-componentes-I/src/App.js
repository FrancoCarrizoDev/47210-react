import { useState } from "react";


function App() {

  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'grid', placeContent: 'center center', height: '100vh'}}>
 
      <button onClick={() => setCount(count + 1)}>
      {count}
      </button>
    </div>
  );
}

export default App;
