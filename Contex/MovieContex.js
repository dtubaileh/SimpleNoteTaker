import React, {useState, createContext} from 'react';

export const MovieContex = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harri potter',
      price: '10$',
      id: 8736,
    },
    {
      name: 'Need For Speed',
      price: '40$',
      id: 9503,
    },
    {
      name: 'Frozen',
      price: '100$',
      id: 2677,
    },
  ]);
  return (
    <MovieContex.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContex.Provider>
  );
};
