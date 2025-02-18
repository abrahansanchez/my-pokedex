import React from 'react';
import PokeCard from './PokeCard';

const defaultPokemonList = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225, 
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65, 
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
  ];

  const Pokedex = ({ pokemonList = defaultPokemonList }) => { 
    return (
      <div className="pokedex">
        <h2>Pokedex</h2>
        <div className="pokemon-container">
          {pokemonList.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} /> 
          ))}
        </div>
      </div>
    );
  };
  
  export default Pokedex;