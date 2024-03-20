import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/movieInterface";

const movieService = {
    getAll:(): IRes<IMovie> => apiService.get(urls.movie)
}

export {
    movieService
}