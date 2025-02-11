import React from "react";
import './FilmResult.css'

function filmResult(filmName: string) {
    return (
        <>
            <div className="filmResult" id="filmResult">
                <h1>{filmName}</h1>
            </div>
        </>
    )
}

export default filmResult;