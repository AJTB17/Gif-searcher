import React, {useEffect, useState} from "react"
import ListOfGifs from "../../componentes/ListOfGifs"
import getGifs from "../../services"

export default function SearchResults({ params}){
    const { keyword } = params 
    const [loading, setLoading] = useState([])
    const [gifs, setGifs] = useState([])

    useEffect(function(){
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
        {
            loading
            ? <i>Cargando...</i>
            :<ListOfGifs gifs={gifs} />
        }
    </>

}