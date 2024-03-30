import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../stors/slices/movieSlice";
import {Movie} from "./Movie";
import { IMovie } from "../../interfaces/movieInterface";
import { useSearchParams} from "react-router-dom";
// import {useDispatch} from "react-redux";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    const [query ]  = useSearchParams({page:'1'})
    // const [ ,setQuery] = useSearchParams({poster_path:'poster_path'})

    const page = query.get(`page`);


    useEffect(() => {
        dispatch(movieActions.getAll('page'))
    },[page]);

    return (
        <div>
            {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies}