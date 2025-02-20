import FilmResult from "./FilmResult";
import { Film } from "./types";
import "./FilmList.css"


function FilmList(films: Film[]) {
    //console.log(films);
    return (
        <>
            <div className="filmList">
                {films.map((film, index) => (
                    <FilmResult film={film} />
                ))}
            </div>
        </>
    )
}

export default FilmList;