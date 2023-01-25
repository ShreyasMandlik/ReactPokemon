import React, { useEffect, useState } from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import PokemonDetails from "./components/PokemonCard";
import { Http } from "./Http";
import { Pokemon } from "./Pokemon";
// import { pokemonList } from "./Pokemon";

const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const HttpHandler = async () => {
    try {
      const res = await Http();
      setPokemonList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HttpHandler();
  }, [pokemonList]);

  const handleClick = () => {
    setPokemonList([]);
  };

  return (
    <div className="container my-4 " style={{ justifyContent: "center" }}>
      <div className="row">
        {pokemonList.length > 0 ? (
          pokemonList.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div> Loading.... </div>
        )}
        <button
          className="btn btn-success my-2"
          style={{ width: "80px" }}
          type="button"
          onClick={handleClick}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default App;
