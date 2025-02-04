
const API_KEY = "" //Put your key here

const API_URL_BASE = `http://www.omdbapi.com/`

export async function fetchMovies(Movie) {
    const res = await fetch(`${API_URL_BASE}?s=${Movie}&apikey=${API_KEY}`);
    const data = await res.json();
    return data.Search || [];
}

export async function fetchMoviesById(id) {
    const res = await fetch(`${API_URL_BASE}?i=${id}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log("Datos de pelicula:",data)
    return data ;
}

