import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import MovieCard from "../components/MovieCard"
import "./MovieGrid.css"


const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {
    
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

   setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
    const timer = setTimeout(() => {
      getTopRatedMovies(topRatedUrl)
    }, 1200)
  }, [])

  return ( 
      <div className="container">
        <h2 className="title">Melhores Filmes: </h2>
        {topMovies.length === 0 && <Loading/>}
        <div className="movies-container">
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard  key={movie.id} movie={movie}/>)}
        </div>
      </div> 
    );
}

export default Home;