import { useEffect, useState } from 'react'
import '../App.css'
import FilmList from '../FilmList'
import axios from 'axios'
import { Actor, Film } from '../types'
import ActorList from '../ActorList'


function Home() {
  const[topFiveFilms, setTopFiveFilms] = useState<Film[]>([]);
  const[topFiveActors, setTopFiveActors] = useState<Actor[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/film-top-five")
    .then(response => setTopFiveFilms(response.data))
    .catch(error => console.error("Error: ", error))
  }, []);


  useEffect(() => {
    axios.get("http://localhost:8080/api/actor-top-five")
    .then(response => setTopFiveActors(response.data))
    .catch(error => console.error("Error: ", error))
  }, []);

  return (
    <>
        <span className="homeHeader">HOME</span>
        <h1>Top 5 Rented Films</h1>
        {FilmList(topFiveFilms)}
        <hr></hr>
        <h1>Top 5 Actors</h1>
        {ActorList(topFiveActors)}

    </>
  )
}

export default Home