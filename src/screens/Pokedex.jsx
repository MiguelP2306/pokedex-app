import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { getPokemonsApi, getPokemonDetailsByUriApi } from '../api';

import PokemonList from '../components/PokemonList';

const Pokedex = () => {
  const [ listPokemons, setListPokemons ] = useState([]);
  const [ nextUrl, setNextUrl ] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi({ url: nextUrl });
      
      setNextUrl(response.next);

      const pokemonsArray = [];

      for await (const pokemonItem of response.results) {
        const pokemonDetails = await getPokemonDetailsByUriApi({ url: pokemonItem.url });
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setListPokemons([...listPokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView>
      <PokemonList pokemons={listPokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}

export default Pokedex;