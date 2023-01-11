import { Response } from 'express';
import { MoviesService, Movie } from './movies.service';
export declare class MoviesController {
    service: MoviesService;
    constructor(service: MoviesService);
    search(query?: string, sortBy?: string): Movie[];
    get(id: string, res: Response): Response<any, Record<string, any>>;
}
