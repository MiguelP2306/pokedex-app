import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Api
import { getPokemonDetailsApi } from '../api';

// Components
import { Header, Type, Stats } from '../components/Pokemon';

const Pokemon = ({ navigation, route: { params } }) => {
  const [ pokemon, setPokemon ] = useState(null);

  const loadPokemon = async () => {
    try {
      const res = await getPokemonDetailsApi({ id: params.id })
      setPokemon(res);
    } catch (error) {
      navigation.goBack();
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon 
          name='arrow-left' 
          color='#fff' 
          size={20} 
          style={{ marginLeft: 20,  }} 
          onPress={navigation.goBack}
        />
      )
    });
  }, [navigation, params])

  useEffect(() => {
    (async() => {
      await loadPokemon();
    })();
  }, []);

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other['official-artwork'].front_default} 
        type={pokemon.types[0].type.name}
      />

      <Type types={pokemon.types} />
    
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}

export default Pokemon;