import { useEffect, useState } from "react";
import { getPokemonByName } from "../services/pokemon";

export const usePokemonByName = (pokemonName) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonByName(pokemonName)
      .then((data) => data.json())
      .then((data) => setPokemon(data))
      .finally(() => setLoading(false));
  }, [pokemonName]);

  return {
    pokemon,
    loading
  };
};
