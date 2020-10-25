import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Movie} from './Movie';
import {MovieContex} from './MovieContex';

export const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContex);
  return (
    <View style={{flex: 1, margin: 20}}>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </View>
  );
};
