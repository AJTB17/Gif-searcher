import React, { useState } from "react"
import { useLocation } from 'wouter'

import ListOfGifs from "componentes/ListOfGifs"
import LazyTrending from "componentes/TrendingSearches"
import useGifs from "hooks/useGifs"


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
            <div className="App-category">
                <LazyTrending />
            </div>
        </>
    )
}