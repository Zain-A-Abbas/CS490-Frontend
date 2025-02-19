import ActorResult from "./ActorResult";
import { Actor } from "./types";
import "./FilmList.css"


function ActorList(actors: Actor[]) {
    //console.log(films);
    return (
        <>
        <div className="filmList">
            {actors.map((actor, index) => (
                <ActorResult actor={actor} />
            ))}
        </div>


        </>
    )
}

export default ActorList;