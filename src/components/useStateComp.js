import React from "react";

const MovieCard = ({title, description, posterURL, rating}) => {
return(
<div className="card" style={{width: '18rem'}}>
<img src={posterURL} className="card-img-top" alt="..." />
    <h3>{title}</h3>
    <div className="card-body">
    <p className="card-text">{description}</p>
    <p>{rating}/10</p>
    </div>
</div>
)}

export default MovieCard;