import {apiService} from "./apiService";

import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll:(): IRes<IMovies[]> => apiService.get(urls.movie.base)
}


export {
    movieService
}