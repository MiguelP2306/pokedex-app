import { API_BASE_URL } from "../utils/constans";

const fetchApi = async ({ url }) => {
  try {
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

const getPokemonsApi = async ({ url }) => {
  try {
    const firstUrl = `${API_BASE_URL}/pokemon?limit=20&offet=0`;
    return await fetchApi({ url: url || firstUrl });
  } catch (error) {
    throw error;
  }
}

const getPokemonDetailsByUriApi = async ({ url }) => {
  try {
    return await fetchApi({ url });
  } catch (error) {
    throw error;
  }
}

const getPokemonDetailsApi = async ({ id }) => {
  try{
    const url = `${API_BASE_URL}/pokemon/${id}`;
    return await fetchApi({ url })
  }catch (error) {
    throw error;
  }
}

export { getPokemonsApi, getPokemonDetailsByUriApi, getPokemonDetailsApi }