import React from "react"
import { Link } from 'wouter'

const POPULAR_GIFS = ["Bleach", "Nutrias", "Jhin", "gatos"]

export default function Home(){
    return (
        <>
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