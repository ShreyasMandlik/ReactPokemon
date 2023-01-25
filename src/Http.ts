import axios from "axios"
import { Pokemon } from "./Pokemon"

export const Http=async(): Promise<Pokemon[]>=>{
    const {data}=await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");

    const pokemons:Pokemon[]=data.results.map((pokemon:any,index:number):Pokemon=>{
        return{
            id:index+1,
            name:pokemon.name,
            height:0,
            weight:0,
            types:[]
        }
    });
    return pokemons;

}