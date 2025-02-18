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