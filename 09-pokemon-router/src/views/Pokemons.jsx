import { Link } from "react-router-dom";
import { usePokemonList } from "../hooks/usePokemonList";

export const Pokemons = () => {
  const { pokemons } = usePokemonList();

  return (
    <div>
      <h1>LISTADO DE POKEMONS</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
