import React, { useEffect, useState } from "react";
import './FilmResult.css'
import { Film, FilmDetails } from "./types";
import axios from 'axios'

type FilmResultProps = {
    film: Film;
}


function FilmResult({film}: FilmResultProps) {
    //const[filmDetails, setFilmDetails] = useState<FilmDetails>();


    const clickResult = () => {
        axios.get("http://localhost:8080/api/film-details?filmId=" + film.filmId)
        .then(response => console.log(response.data))
        .catch(error => console.error("Error: ", error))
    }


    return (
        <>
            <div className="filmResult" id="filmResult" onClick={clickResult}>
                <h1>↓ {film.title}</h1>
            </div>
        </>
    )
}


export default FilmResult;