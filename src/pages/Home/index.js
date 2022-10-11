import React, { useState } from "react"
import { Link, useLocation } from 'wouter'

import ListOfGifs from "../../componentes/ListOfGifs"
import useGifs from "../../hooks/useGifs"

const POPULAR_GIFS = ["Bleach", "Nutrias", "Jhin", "gatos"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { gifs } = useGifs()

    const handleSubmit = evt => {
        //previene que realice sus acciones por defecto
        evt.preventDefault() 
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword}/>
            </form>
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs mas populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGifs) => (
                        <li key={popularGifs}>
                            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}