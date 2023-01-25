import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetailsWithId = () => {
  const pok: any = useParams();
  console.log(pok);
  return (
    <div>
      <h1>{pok.Id}</h1>
    </div>
  );
};

export default PokemonDetailsWithId;
