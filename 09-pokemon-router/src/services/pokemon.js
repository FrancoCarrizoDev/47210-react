

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = (limit = 20, offset = 0) => {
  return fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
};

export const getPokemonByName = (name) => {
    return fetch(`${API_URL}/pokemon/${name}`);
}

