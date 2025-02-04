import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Navbar from './components/navbar'

function App() {
  const [movie,setMovie]= useState("");
  
  return (<>
    <BrowserRouter>
      <Navbar setMovie={setMovie} />
      <Routes>
        <Route path="/" element={<Home movie={movie} />} />
        <Route path='/movie/:id' element={<MovieDetails/>}></Route>
      </Routes>
    </BrowserRouter></>
  )
}

export default App
