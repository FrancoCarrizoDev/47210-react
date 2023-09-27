import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Pokemons } from "./views/Pokemons";
import { PokemonByName } from "./views/PokemonByName";
import { NAVBAR_ROUTES } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="navbar">
          {NAVBAR_ROUTES.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<h1>HOME</h1>} />
        <Route exact path="/pokemons" element={<Pokemons />} />
        <Route exact path="/pokemon/:pokemonName" element={<PokemonByName />} />

        <Route path="*" element={<h1>NO EXISTE LA RUTA</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
