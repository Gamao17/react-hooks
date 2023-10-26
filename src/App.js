import MovieList from "./components/moL.js";
import React,{useState} from "react";
import Filter from "./components/Filter.js";

function App(){

    const [movieData,setMovieData] = useState([
        {title : "John Wick: Chapitre 4",description : "Le légendaire tueur à gages John Wick (Keanu Reeves) doit faire face à un nouvel ennemi avec des alliances puissantes à travers le monde et des forces qui transforment les anciens amis en ennemis", posterURL : "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF1000,1000_QL80_.jpg", rating : 7.8}, 
        {title : "Mission: Impossible - Dead Reckoning Part One",description : "Ethan Hunt (Tom Cruise) et son équipe IMF doivent traquer une arme dangereuse avant qu’elle ne tombe entre de mauvaises mains.", posterURL : "https://cdn.lesnumeriques.com/news/21/210032/505f75bd-mission-impossible-7-on-connait-la-duree-du-film-et-c-est-un-nouveau-record.jpg", rating : 7.9},
        {title : "Creed III",description : "Michael B. Jordan revient dans ce troisième volet de la franchise Creed, qui suit le champion poids lourd fils d’Apollo Creed alors qu’il affronte son ancien ami d’enfance.", posterURL : "https://m.media-amazon.com/images/I/61kqsZCvCFL._AC_UF1000,1000_QL80_.jpg", rating : 7},
        {title : "Cocaine Bear",description : "Cette comédie d’action irrévérencieuse est inspirée de l’histoire vraie d’un ours qui se met à la cocaïne qui a été jetée dans les bois.", posterURL : "https://images.cinefil.com/movies/1122631.webp", rating : 8}])
    
const [newMovie, setNewMovie] = useState({title : '', description : '', posterURL : '', rating : ''});

const handleOnChange = (event) => {
const {name,value} = event.target
setNewMovie({...newMovie, [name] : value});
};
    
const handleOnSubmit = () => {
setMovieFiltered((prevFilteredData) => [...prevFilteredData, newMovie]);
setNewMovie({title : '', description : '', posterURL : '', rating : ''})

};

const [movieFiltered, setMovieFiltered] = useState(movieData);

const handleFilter =(titleToFilter,ratingToFilter)=>{
    const filteredMovies = movieData.filter((movie) => {
        return (titleToFilter === '' || movie.title.toLocaleLowerCase().includes(titleToFilter.toLocaleLowerCase())) &&
        (ratingToFilter === '' || movie.rating >= parseFloat(ratingToFilter))
    })
setMovieFiltered(filteredMovies)
    }

    return(
        <>
        <Filter handleFilter={handleFilter}/>
        <MovieList movieFiltered={movieFiltered}/>
        <div>
            <h5>Add new film here :</h5>
            <div>
            <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleOnChange} />
            </div>

            <div>
            <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleOnChange} />
            </div>
        
            <div>
            <input type="text" name="posterURL" placeholder="URL's picture" value={newMovie.posterURL} onChange={handleOnChange} />
            </div>

            <div>
            <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleOnChange}/>
            </div>
        
        
        <button onClick={handleOnSubmit}>Submit</button>
    </div>
        </>
    )
}

export default App;