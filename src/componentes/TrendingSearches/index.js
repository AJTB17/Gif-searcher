import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../category";

function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
        console.log(trends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending(){
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect(function(){
        const onChange = (entries) => {
            const el = entries[0]
            if(el.isIntersecting){
                setShow(true)
            }
        }
        const observer = new IntersectionObserver(onChange)
        observer.observe(elementRef.current)
    })
    
    return <div ref={elementRef}>
        {show ? <TrendingSearches /> : null}
    </div>

}