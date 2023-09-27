import { useParams } from "react-router-dom";
import { usePokemonByName } from "../hooks/usePokemonByName";

export const PokemonByName = () => {
  const { pokemonName } = useParams();
  const { pokemon, loading } = usePokemonByName(pokemonName);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (!pokemon) {
    return <h1>No existe el pokemon</h1>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        width={"100px"}
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h3>Habilidades</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};
