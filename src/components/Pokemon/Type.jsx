import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { capitalize, map } from 'lodash';

import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Type = ({ types }) => {

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType({ type: item.type.name })}}>
          <Text style={styles.type}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  type: {
    color: '#fff',
  },
})

export default Type;