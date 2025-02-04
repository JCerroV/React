import { useEffect, useState } from "react";

import MovieList from "../components/MovieList";
import { fetchMovies } from "../services/FilmApi";

 const Home = ({movie}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if(movie){
            fetchMovies(movie).then(setMovies)
        }
        
    }, [movie])

    return (

        <>
        
        <h1>MovieSearch</h1>
        <MovieList movies={movies}/>
        
        </>

    )
}
export default Home;
    