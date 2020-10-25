import React from 'react';
import {View, Text} from 'react-native';

export const Movie = ({name, price}) => {
  return (
    <View>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Text style={{fontSize: 15}}>{price}</Text>
    </View>
  );
};
