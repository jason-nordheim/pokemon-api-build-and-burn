import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon`

export default function PokemonContainer() {
    const [pokemons, setPokemons] =useState([])

    useEffect(() => {
        fetch(POKEMON_API_URL)
            .then(response => response.json())
            .then(handleResults)
    },[])

    const handleResults = (data) => {
        setPokemons(data.results.map((pokemon) => {
            return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} /> 
        }))
    }

    return (
        <div className="pokemon-container">
            {pokemons}
        </div>
    )
}
