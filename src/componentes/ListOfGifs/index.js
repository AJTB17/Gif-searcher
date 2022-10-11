import React from "react";
import Gif from "../Gif";
import './styles.css'

export default function ListOfGifs({ gifs }){

    return <div className="ListOfGifs">
        {
            gifs.map(({ url, title, id }) => 
                <Gif 
                    title={title} 
                    url={url} 
                    id={id}
                    key={id}
                />
            )
        }
    </div>
}