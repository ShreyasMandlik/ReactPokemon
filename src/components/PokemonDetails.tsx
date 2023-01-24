import React, { useState } from "react";
import { Pokemon } from "../Pokemon";
interface PokemonDetail {
  pokemon: Pokemon;
  key: number;
}

const PokemonDetails = ({ pokemon }: PokemonDetail) => {
    const [isClicked, setIsClicked] = useState(0);
    const handleClick = () => {
        setIsClicked(1 - isClicked);
    }
  return (
    <div className="card mx-3" style={{ width: "18rem" ,textAlign:'center'}}>
      <img
        className="card-img-top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <button className="btn btn-primary " onClick={handleClick}>
          Show Details
        </button>
        {  
            isClicked ? <div>
                <p>Color: {pokemon.color}</p>
                <p>Power: {pokemon.power}</p> 
            </div> : ''
        }
      </div>
    </div>
  );
};

export default PokemonDetails;

{
  /* <div style={{ backgroundColor: pokemon.color }}>
        <h1>Name : </h1>
        <p>Id: {pokemon.id}</p>
        <p>Power: {pokemon.power}</p>
    </div> */
}
