
export default interface MovieDetails {
    _id?: string;
    name?: string;
    year?: string;
    plot?: string;
    url?: string;
}

export default interface MovieDetailsList {
    error?: boolean;
    loading?: boolean;
    data?: MovieDetails[];
}