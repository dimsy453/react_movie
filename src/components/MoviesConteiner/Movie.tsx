import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces/movieInterface";
import {images} from "../../constants";
import css from './Movie.module.css'


interface IProps extends PropsWithChildren {
movie:IMovie,
}

const Movie : FC<IProps> = ({movie}) => {
    const {genre_ids,original_title,popularity, poster_path} = movie
    const poster = `${images}/${poster_path}`

    return (
        <div className={css.Movie}>
            <img src={poster} alt={original_title}/>
            <div> genre_ids:{genre_ids}</div>
            <h2>{original_title}</h2>
            <div> popularity:{popularity}</div>

        </div>
    );
};

export {
    Movie
}