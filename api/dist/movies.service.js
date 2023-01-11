"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const path_1 = require("path");
class MoviesService {
    constructor() {
        this.movies = require((0, path_1.resolve)(__dirname, '..', 'movies.json')).reduce((acc, movie, id) => {
            return Object.assign(Object.assign({}, acc), { [id]: Object.assign(Object.assign({}, movie), { id, Title: String(movie.Title) }) });
        }, {});
    }
    getMovie(id) {
        return this.movies[id];
    }
    getMovies(query, sortBy) {
        return Object.values(this.movies)
            .filter((movie) => !query || movie.Title.includes(query))
            .sort((a, b) => {
            return (a[sortBy || 'Title'] || a.Title) > (b[sortBy || 'Title'] || b.Title) ? 1 : -1;
        })
            .slice(0, 100);
    }
}
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map