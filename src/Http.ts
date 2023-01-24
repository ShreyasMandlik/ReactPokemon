import { Pokemon, pokemonList } from "./Pokemon"

export const Http=(): Promise<Pokemon[]>=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Call of API");
            resolve(pokemonList);
        },2000) ;
    })
}