import React, { useEffect, useState } from "react";
import './FilmResult.css'
import { Actor, ActorDetails, Film } from "./types";
import axios from 'axios'

type ActorResultProps = {
    actor: Actor;
}


function ActorResult({actor}: ActorResultProps) {
    const[actorDetails, setActorDetails] = useState<ActorDetails>();
    const[topFiveActorFilms, setTopFiveActorFilms] = useState<Film[]>([]);
    const [expandedDetails, setExpandedDetails] = useState<Boolean>(false);

    const clickResult = () => {
        axios.get("http://localhost:8080/api/actor-details?actorId=" + actor.actorId)
        .then(response => setActorDetails(response.data))
        .catch(error => console.error("Error: ", error))


        axios.get("http://localhost:8080/api/actor-top-five-films?actorId=" + actor.actorId)
        .then(response => setTopFiveActorFilms(response.data))
        .catch(error => console.error("Error: ", error))

        setExpandedDetails(!expandedDetails);
        console.log(topFiveActorFilms);
    }


    return (
        <>
            <div className="filmResult" id={actor.actorId.toString()} onClick={clickResult}>
                <h1>↓ {actor.firstName} {actor.lastName}</h1>
            </div>
            
            {expandedDetails && (
                <div className="filmDetails">
                    <h2>Actor Films</h2>
                    <ul>
                        {actorDetails?.filmInfo.split("; ").map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h2>Top 5 Rented Films</h2>
                    <ul>
                        {topFiveActorFilms.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}


export default ActorResult;