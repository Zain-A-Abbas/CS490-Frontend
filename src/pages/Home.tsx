import { useEffect, useState } from 'react'
import '../App.css'
import filmResult from '../FilmResult'
import FilmList from '../FilmList'
import axios from 'axios'
import { Film } from '../types'


function Home() {
  const[topFiveFilms, setTopFiveFilms] = useState<Film[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/top-five")
    .then(response => setTopFiveFilms(response.data))
    .catch(error => console.error("Error: ", error))
  }, []);


  return (
    <>
        <h1>Top 5 Rented Films</h1>
        {FilmList(topFiveFilms)}
    </>
  )
}

export default Home