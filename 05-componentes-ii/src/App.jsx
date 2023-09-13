import "./App.css";
import { ExampleFetch } from "./ejemplos/ExampleFetch";
import ExampleUseEffect from "./ejemplos/ExampleUseEffect";
import ExampleUseEffectSimple from "./ejemplos/ExampleUseEffectSimple";
import { ExampleUseRef } from "./ejemplos/ExampleUseRef";

export const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <div className="navbar">NAVBAR</div>
      <h1>{props.text}</h1>
      {props.children}
      <div className="footer">FOOTER</div>
    </div>
  );
};

function App() {
  return (
    <>
      {/* <h1>HOLA MUNDO</h1> */}
      {/* <Layout text="HOLA MUNDO">
        <span>soy un span</span>
        <p>Soy un parrafo</p>
        <div>soy un div</div>
      </Layout> */}
      {/* <ExampleUseRef /> */}
      {/* <ExampleUseEffectSimple /> */}
      {/* <ExampleUseEffect /> */}
      <ExampleFetch />
    </>
  );
}

export default App;
