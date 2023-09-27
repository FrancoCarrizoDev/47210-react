import { useEffect, useState } from "react";
import { getPokemonList } from "../services/pokemon";


export const usePokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      getPokemonList()
        .then((data) => data.json())
        .then((data) => setPokemons(data.results));
    }, []);

    return {
      pokemons
    };
}