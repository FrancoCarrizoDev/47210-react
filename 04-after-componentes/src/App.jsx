import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer greeting="HOLA MUNDO!" />
    </div>
  );
}

export default App;
