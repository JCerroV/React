import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../services/FilmApi";

const MovieDetails = () => {
    const movieId = useParams();
    const [movie,setMovie] = useState(null)

    useEffect (() => {
        fetchMoviesById(movieId.id).then(setMovie)
    }, [])

    if (!movie) return <p>Cargando...</p>;
    return (
        <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Año:</strong> {movie.Year}</p>
      <p><strong>Género:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot}</p>
    </div>
    )
}
export default MovieDetails;