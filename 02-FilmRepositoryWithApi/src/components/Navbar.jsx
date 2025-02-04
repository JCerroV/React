import { useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";

const Navbar = ({setMovie}) =>{
    const [movieName, setMovieName] = useState('')
    const navigate = useNavigate();

    const SearchMovie = (e) =>{
        e.preventDefault()
        if(movieName.trim().length>0){
            setMovie(movieName)
            navigate("/")
            setMovieName('')
        }

        
    }
    return (
        <form className="nav-container" onSubmit={SearchMovie} >
            <h2>Film repository</h2> 
            
            <div>
                <input type="text" value={movieName} onChange={e => setMovieName(e.target.value)} placeholder="Search a film"/>
                <button type="submit"  >Search</button>
            </div>
        </form>

    )
}

export default Navbar;