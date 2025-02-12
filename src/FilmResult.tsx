import React from "react";
import './FilmResult.css'

type FilmResultProps = {
    filmName: String
}

function FilmResult({filmName}: FilmResultProps) {
    return (
        <>
            <div className="filmResult" id="filmResult">
                <h1>↓ {filmName}</h1>
            </div>
        </>
    )
}

export default FilmResult;