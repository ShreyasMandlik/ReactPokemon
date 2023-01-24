import React, { useEffect, useState } from "react";
import PokemonDetails from "./components/PokemonDetails";
import { Http } from "./Http";
import { Pokemon } from "./Pokemon";
// import { pokemonList } from "./Pokemon";


const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(()=>{
    Http().then((fetchedList) => {
      setPokemonList(fetchedList);
    }).catch();
  },[pokemonList])
  const handleClick = () => {
    setPokemonList([]);
  }
  return (
    <div className="container my-4 row" style={{justifyContent:'center'}}>
      {
        pokemonList.length > 0 
        ? pokemonList.map((pokemon) => (
        <PokemonDetails key={pokemon.id} pokemon={pokemon} />)) 
        : <div> Loading.... </div>  
      }
      <button className="btn btn-success" type="button" onClick={handleClick}>
        Refresh
      </button>
    </div>
  );
};

export default App;
