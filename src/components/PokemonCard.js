import React, { useEffect, useState} from 'react'

export default function PokemonCard({name, url}) {
    const [imageURL, setImageURL] = useState({})

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(handlePokeData)
    }, [])

    const handlePokeData = (data) => {
        setImageURL(data.sprites.front_default)
    }

    return (
        <div key={name} className="poke-card">
            <h1>{name}</h1>
            <img src={imageURL} alt={name} ></img>
        </div>
    )
}
