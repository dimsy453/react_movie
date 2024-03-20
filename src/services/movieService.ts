import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types";
import {IMovies} from "../interfaces";

const movieService = {
    getAll:(): IRes<IMovies[]> => apiService.get(urls.movie.base)
}


export {
    movieService
}