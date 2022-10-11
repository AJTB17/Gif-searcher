import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "componentes/category";

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}
