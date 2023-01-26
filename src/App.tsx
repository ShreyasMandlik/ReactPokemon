import React, { useEffect, useState } from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import PokemonDetails from "./components/PokemonCard";
import { Http } from "./Http";
import { Pokemon } from "./Pokemon";
import { useFetchCustomAPI as usePokemonsApi } from "./PokemonApi";

const App = () => {
  const { pokemon, error, isloading } = usePokemonsApi();

  // const handleClick = () => {
  //   setPokemonList([]);
  // };

  return (
    <div className="container my-4 " style={{ justifyContent: "center" }}>
      <div className="row">
        {pokemon && pokemon.length > 0 ? (
          pokemon.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div> Loading.... </div>
        )}
        {/* <button
          className="btn btn-success my-2"
          style={{ width: "80px" }}
          type="button"
          onClick={handleClick}
        >
          Refresh
        </button> */}
      </div>
    </div>
  );
};

export default App;
