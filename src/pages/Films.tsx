import { useEffect, useState } from "react";
import "./Films.css";
import filmResult from "../FilmResult";
import FilmList from "../FilmList";
import axios from "axios";
import { Film } from "../types";

function Films() {
  const [searchedFilmName, setSearchedFilmName] = useState<String>("");
  const [searchedActorName, setSearchedActorName] = useState<String>("");
  const [searcedGenre, setSearchedGenre] = useState<number>(0);
  const [searchedFilms, setSearchedFilms] = useState<Film[]>([]);
  

  const searchInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm: String = input.target.value;
    setSearchedFilmName(searchTerm);
  };

  const actorSearchInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm: String = input.target.value;
    setSearchedActorName(searchTerm);
  };

  const genreSearchInput = (input: React.ChangeEvent<HTMLSelectElement>) => {
    const genre: number = parseInt(input.target.value);
    setSearchedGenre(genre);
    console.log(searcedGenre);
  }

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/film-search?filmName=" +
          searchedFilmName +
          "&actorName=" +
          searchedActorName +
          "&genre=" +
          searcedGenre
      )
      .then((response) => setSearchedFilms(response.data))
      .catch((error) => console.error("Error: ", error));
  }, [searchedFilmName, searchedActorName, searcedGenre]);

  return (
    <>
      <h2>Search</h2>
      <input type="text" placeholder="Film title" onChange={searchInput} />
      <input type="text" placeholder="Actor name" onChange={actorSearchInput} />
      <select name="genre" id="genre" onChange={genreSearchInput}>
        <option value="0">Any</option>
        <option value="1">Action</option>
        <option value="2">Animation</option>
        <option value="3">Children</option>
        <option value="4">Classics</option>
        <option value="5">Comedy</option>
        <option value="6">Documentary</option>
        <option value="7">Drama</option>
        <option value="8">Family</option>
        <option value="9">Foreign</option>
        <option value="10">Games</option>
        <option value="11">Horror</option>
        <option value="12">Music</option>
        <option value="13">New</option>
        <option value="14">Sci-Fi</option>
        <option value="15">Sports</option>
        <option value="16">Travel</option>
      </select>

      {searchedFilms.length > 0 ? FilmList(searchedFilms) : <p>No films.</p>}
    </>
  );
}

export default Films;
