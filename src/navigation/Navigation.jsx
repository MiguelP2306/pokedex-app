import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='favorite' component={FavoriteNavigation} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name='heart' color={color} size={size} />
        ),
      }} />
      <Tab.Screen name='pokedex' component={PokedexNavigation} options={{
        tabBarLabel: '',
        tabBarIcon: () => renderPokeball() 
      }} />
      <Tab.Screen name='account' component={AccountNavigation} options={{
        tabBarLabel: 'Mi cuenta',
        tabBarIcon: ({ color, size }) => (
          <Icon name='user' color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
    );
};

export default Navigation;


const renderPokeball = () => (
  <Image 
    source={require('../assets/img/pokeball.png')} 
    style={{
      width: 75,
      height: 75,
      top: -18,
    }}  
  />
)