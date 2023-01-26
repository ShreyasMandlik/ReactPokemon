
import { useState } from 'react';
import { Pokemon } from './Pokemon';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useSinglePokemonApi = (currid: any)=>{
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isLoading, setIsloading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

   
    useEffect(()=>{
    
    const resetState =()=>{
        setPokemon(undefined);
        setIsloading(true);
        setError(null)
    }
    resetState();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + currid
    ).then(({data:data})=>{
        const currPokemon:Pokemon={
            id:data?.id,
            name:data?.name,
            height:data?.height,
            weight:data?.weight,
            types:data?.types.map((type: any) =>{
                return type.type.name;
            })
        }
        setPokemon(currPokemon);
        setError(null);
        setIsloading(false);
    })
    .catch((error)=>{
        setError("there is something error");
        setIsloading(false);
        setPokemon(pokemon);
    })
    },[currid])

    return {pokemon, error, isLoading};

}