import MovieCard from "./useStateComp.js";
import React, {useState} from "react";

const MovieList = ({movieFiltered}) =>{

return(
    <>
    {movieFiltered.map((a)=> <MovieCard {...a}/>)}
    </>
    )
}

export default MovieList;