import React from "react";
import { useLocation } from "react-router-dom";
import { Pokemon } from "./../Pokemon";

const PokemonDetails = () => {
  const location = useLocation();
  const pokemon: Pokemon = location.state;

  return (
    <div>
      
      <h1>{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonDetails;
