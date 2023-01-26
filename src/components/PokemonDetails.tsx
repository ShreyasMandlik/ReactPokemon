import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { fetchpokemon } from "../Http";
import { Pokemon } from "./../Pokemon";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  
  const params: any = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const fetchapi = async () => {
    const res: Pokemon = await fetchpokemon(params.Id);
    setPokemon(res);
  };

  const navigate=useNavigate();
  function goback() {
    navigate(-1);
  }

  useEffect(() => {
    fetchapi();
  }, [params.Id]);

  return pokemon ? (
    <div className="text-center">
      <img
        className="card-img-top"
        style={{ height: "300px", width: "300px" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt="Card image cap1"
      />
      <h1>Pokemon Id:{pokemon.id}</h1>
      <div className="card-body text-center">
        <p className="card-title text-center">Pokemon Name:{pokemon.name}</p>
        <p className="card-text text-center">Pokemon Height:{pokemon.height}</p>
        <p className="card-text text-center">Pokemon Weight:{pokemon.weight}</p>
      </div>

      <p className="text-center">
        Pokemon types:
        {pokemon.types.map((type: any) => {
          return <span className="badge bg-primary mx-1">{type}</span>;
        })}
      </p>
      <button type="button" className="btn btn-secondary" onClick={goback}>
        Go Back
      </button>
    </div>
  ) : (
    <div>loading..</div>
  );
};

export default PokemonDetails;
function useParam() {
  throw new Error("Function not implemented.");
}
