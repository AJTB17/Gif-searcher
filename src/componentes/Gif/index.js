import React from "react";
import './Gif.css'
import { Link } from "wouter";

export default function Gif({ title, id, url, key }){
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img loading="Lazy" src={url} alt={title} key={key}/>
            </Link>
        </div>
    )
}