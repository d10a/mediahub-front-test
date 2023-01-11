export declare class MoviesService {
    private movies;
    getMovie(id: string): Movie | undefined;
    getMovies(query?: string, sortBy?: string): Movie[];
}
export interface Movie {
    id: number;
    Title: string;
    'US Gross'?: number;
    'Worldwide Gross'?: number;
    'Production Budget'?: number;
    'Release Date'?: string;
    Distributor?: string;
    'IMDB Rating'?: number;
    'IMDB Votes'?: number;
    'Major Genre'?: string;
    Director?: string;
    'Rotten Tomatoes Rating'?: string;
}
