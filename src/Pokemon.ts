
export interface Pokemon{
    id:number,
    name:string,
    color:string,
    power:number
}


export const pikachu:Pokemon={
    id:1,
    name:'Pikachu',
    color:'yellow',
    power:10
}

export const pokemonList: Pokemon[] = [
    {
        id:1,
        name:'Pikachu',
        color:'yellow',
        power:10
    },
    {
        id: 2,
        name: 'Farigiraf',
        color: 'pink',
        power: 20
    },
    {
        id:3,
        name:'Pikachu2',
        color:'red',
        power:100
    },
    {
        id: 4,
        name: 'Farigiraf2',
        color: 'green',
        power: 200
    },
    
]