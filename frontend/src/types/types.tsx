
export interface Movie {
    _id?: string;
    name?: string;
    year?: string;
    plot?: string;
    url?: string;
}

export interface MovieDetails {
    error?: boolean;
    loading?: boolean;
    data: Movie;
}

export interface MovieDetailsList {
    error?: boolean;
    loading?: boolean;
    data: Movie[];
}
