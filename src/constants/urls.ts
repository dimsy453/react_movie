const baseURL = 'https://api.themoviedb.org/3'

const movie = '/discover/movie'
const images = `https://image.tmdb.org/t/p/w500`
const genre = '/genre/movie/list'

const urls = {
    genre:genre,

    movie:{
        base:movie,
        ById:(id:number):string => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls,
    images
}