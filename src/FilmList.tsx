import FilmResult from "./FilmResult";
import "./FilmList.css"

function FilmList(filmNames: string[]) {
    return (
        <>
        <div className="filmList">
            {filmNames.map((film, index) => (
                <FilmResult filmName={film} />
            ))}
        </div>

        </>
    )
}

export default FilmList;