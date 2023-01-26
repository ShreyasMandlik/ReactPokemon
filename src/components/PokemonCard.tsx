import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon";
interface PokemonDetail {
  pokemon: Pokemon;
  key: number;
}

const PokemonCard = ({ pokemon }: PokemonDetail) => {
  const [isClicked, setIsClicked] = useState(0);

  // const handleClick = () => {
  //   setIsClicked(1 - isClicked);
  // };
  return (
    <>
      <div className="container col-sm-6 col-md-6 col-lg-3 my-2">
        <div className="card mx-3" style={{ width: "18rem" }}>
          <Link to={`/pokemons/${pokemon.id}`} state={pokemon}>
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt="Card image cap"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
