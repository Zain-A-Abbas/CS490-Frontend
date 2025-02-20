import React, { useEffect, useState } from "react";
import './FilmResult.css'
import { Film, FilmDetails, Customer } from "./types";
import axios from 'axios'

type FilmResultProps = {
    film: Film;
}


function FilmResult({film}: FilmResultProps) {
    const [filmDetails, setFilmDetails] = useState<FilmDetails>();
    const [expandedDetails, setExpandedDetails] = useState<Boolean>(false);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [cannotRentFilm, setCannotRentFilm] = useState<number>(0);
    const [rentalCustomer, setRentalCustomer] = useState<number>(0);

    const clickResult = () => {
        axios.get("http://localhost:8080/api/film-details?filmId=" + film.filmId)
        .then(response => setFilmDetails(response.data))
        .catch(error => console.error("Error: ", error))

        axios.get("http://localhost:8080/api/get-customers")
        .then(response => setCustomers(response.data))
        .catch(error => console.error("Error: ", error))

        axios.get("http://localhost:8080/api/film-check-rentable?filmId=" + film.filmId)
        .then(response => setCannotRentFilm(response.data))
        .catch(error => console.error("Error: ", error))

        setExpandedDetails(!expandedDetails);
    }

    const rentButton = async () => {
        if (!filmDetails) {
            alert("Missing film details.");
            return;
        }

        const rentalData = {            
            customer_id: rentalCustomer,
            film_id: film.filmId,
            rentalPeriod: filmDetails.rentalDuration
        }

        try {
            const response = await axios.post("http://localhost:8080/api/add-rental?customerId=" + rentalData.customer_id + "&filmId=" + rentalData.film_id + "&rentalPeriod=" + rentalData.rentalPeriod)
            console.log("Rental response: ", response.data);
            alert("Added rental successfully!");
            setCannotRentFilm(1);
        } catch (error) {
            console.error("Error: ", error);
            alert("Failed to rent out.");
        }
        
    }

    const chosenCustomer = (input: React.ChangeEvent<HTMLSelectElement>) => {
        const chosenCustomerId: number = parseInt(input.target.value);
        setRentalCustomer(chosenCustomerId);
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
                    
                    <h2>Film Rental</h2>
                    {!cannotRentFilm && (
                        <>
                            <select name="customer" id="customerSelect" onChange={chosenCustomer}>
                                {customers.map((item, index) => (
                                    <option value={item.customerId}>{item.firstName} {item.lastName}</option>
                                ))}
                            </select>

                            <button onClick={rentButton}>Rent film to customer</button>
                        </>
                    )}
                    {cannotRentFilm == 1 && <p>Film already rented out.</p>}
                </div>

            )}
        </>
    )
}


export default FilmResult;