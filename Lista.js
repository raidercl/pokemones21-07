import React, {ueseEffect, useEffect, useState} from "react"
const Lista = (props) => {

    const [pokemon,setPokemon]= useState([])
    const [titulo, setTitulo]= useState["Hola soy un titulo"]
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setPokemon(data.results)
            }
        )
    } ,[])
    
    return (
        <>
            {pokemons.map((pokemon) => {
                return (<div>{pokemon}</div>)
            }
            )}
            Lista Pokemon !
        </>
    )
}

export default Lista