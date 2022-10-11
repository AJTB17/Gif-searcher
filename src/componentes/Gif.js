import React from "react";
import './Gif.css'

export default function Gif({ title, id, url, key }){
    return (
        <a href={`#${id}`} className="Gif">
              <h4>{title}</h4>
              <img src={url} alt={title} key={key}/>
        </a>
    )
}