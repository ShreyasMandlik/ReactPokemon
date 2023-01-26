import axios from "axios"
import { Pokemon } from "./Pokemon"
import { useState } from 'react';
import { useEffect } from 'react';



export const useFetchCustomAPI = ()=>{
    const [pokemon, setPokemon] = useState<Pokemon[]>();
    const [error, setError] = useState<any>();
    const [isloading, setIsLoading] = useState<boolean>(true);
    
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100").then(({data: data})=>{
        const pokemons:Pokemon[]=data.results.map((pokemon:any,index:number):Pokemon=>{
        return{
            id:index+1,
            name:pokemon.name,
            height:0,
            weight:0,
            types:[]
        }
        })
        setPokemon(pokemons);
        setError(null);
        setIsLoading(false);
    }).catch((error)=>{
        setError("Some error has happend");
        setPokemon([]);
        setIsLoading(false);
    });

    },[])

    return {pokemon, error, isloading};
}