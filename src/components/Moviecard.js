import React, {useState} from "react";

const MovieCard = () => {
const [movieData,setMovieData] = useState([ 
    {title : "Mission: Impossible - Dead Reckoning Part One",description : "Ethan Hunt (Tom Cruise) et son équipe IMF doivent traquer une arme dangereuse avant qu’elle ne tombe entre de mauvaises mains.", posterURL : "https://cdn.lesnumeriques.com/news/21/210032/505f75bd-mission-impossible-7-on-connait-la-duree-du-film-et-c-est-un-nouveau-record.jpg", rating : "7.9/10"},
    {title : "Creed III",description : "Michael B. Jordan revient dans ce troisième volet de la franchise Creed, qui suit le champion poids lourd fils d’Apollo Creed alors qu’il affronte son ancien ami d’enfance.", posterURL : "https://m.media-amazon.com/images/I/61kqsZCvCFL._AC_UF1000,1000_QL80_.jpg", rating : "7/10"},
    {title : "Cocaine Bear",description : "Cette comédie d’action irrévérencieuse est inspirée de l’histoire vraie d’un ours qui se met à la cocaïne qui a été jetée dans les bois.", posterURL : "https://images.cinefil.com/movies/1122631.webp", rating : "8/10"},
    {title : "John Wick: Chapitre 4",description : "Le légendaire tueur à gages John Wick (Keanu Reeves) doit faire face à un nouvel ennemi avec des alliances puissantes à travers le monde et des forces qui transforment les anciens amis en ennemis", posterURL : "https://actugeekgaming.com/wp-content/uploads/2023/03/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg", rating : "7.8/10"}])

const [newMovie, setNewMovie] = useState({title : '', description : '', posterURL : '', rating : ''})

const handleOnChange = (event) => {
    const {name,value} = event.target
    setNewMovie({...newMovie, [name] : value});
};

const handleOnSubmit = (event) => {
setMovieData([...movieData, newMovie])
setNewMovie({title : '', description : '', posterURL : '', rating : ''})
}

const [title, description, posterURL, rating] = movieData

return(
<div className="card" style="width: 18rem;">
    <h3>{title}</h3>
    <img src={posterURL} className="card-img-top" alt="..." />
    <div className="card-body">
    <p className="card-text">{description}</p>
    <p>{rating}</p>
    </div>
</div>
)}

export default MovieCard;