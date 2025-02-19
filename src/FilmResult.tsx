import React, { useEffect, useState } from "react";
import './FilmResult.css'
import { Film, FilmDetails } from "./types";
import axios from 'axios'

type FilmResultProps = {
    film: Film;
}


function FilmResult({film}: FilmResultProps) {
    const[filmDetails, setFilmDetails] = useState<FilmDetails>();
    const [expandedDetails, setExpandedDetails] = useState<Boolean>(false);

    const clickResult = () => {
        axios.get("http://localhost:8080/api/film-details?filmId=" + film.filmId)
        .then(response => setFilmDetails(response.data))
        .catch(error => console.error("Error: ", error))

        setExpandedDetails(!expandedDetails);
        console.log(filmDetails);
    }


    return (
        <>
            <div className="filmResult" id={film.filmId.toString()} onClick={clickResult}>
                <h1>↓ {film.title}</h1>
            </div>
            
            {expandedDetails && (
                <div className="filmDetails">
                    <h2>Details</h2>
                    <p><strong>Description: </strong>{filmDetails?.description}</p>
                    <p><strong>Length: </strong>{filmDetails?.length} minutes</p>
                    <p><strong>Rating: </strong>{filmDetails?.rating}/5</p>
                    <p><strong>Release Year: </strong>{filmDetails?.releaseYear}</p>
                    <p><strong>Rental Duration: </strong>{filmDetails?.rentalDuration} days</p>
                    <p><strong>Replacement Cost: </strong>${filmDetails?.replacementCost}</p>
                </div>
            )}
        </>
    )
}


export default FilmResult;