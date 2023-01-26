import axios from "axios"
import { Pokemon } from "./Pokemon"


// const params=useParams();
export const Http=async(): Promise<Pokemon[]>=>{
    const {data}=await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");

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



export const fetchpokemon=async(Id:number): Promise<Pokemon>=>{
    
    const {data}=await axios.get("https://pokeapi.co/api/v2/pokemon/" + Id);
    const pokemon:Pokemon={
            id:data?.id,
            name:data?.name,
            height:data?.height,
            weight:data?.weight,
            types:data?.types.map((type: any) =>{
                return type.type.name;
            })
        }
    return pokemon;

}