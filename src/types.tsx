export interface Film {
    filmId: number;
    title: String;
}

export interface FilmDetails {
    filmId: number;
    title: String;
    description: String;
    releaseYear: number;
    rentalDuration: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: String;
}

export interface Actor {
    actorId: number;
    firstName: String;
    lastName: String;
}

export interface ActorDetails {
    actorId: number;
    firstName: String;
    lastName: String;
    filmInfo: String;
}
