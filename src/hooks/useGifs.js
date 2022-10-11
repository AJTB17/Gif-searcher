import { useContext, useEffect, useState } from "react"
import getGifs from "services/getGifs"
import GifsContext from "context/GifsContext"

export default function useGifs({ keyword } = { keyword: null }){
    const [loading, setLoading] = useState([])
    const {gifs, setGifs} = useContext(GifsContext)
    
    useEffect(function(){
        setLoading(true)
        // recuperamos la keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamo la keyword en el localstorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}
