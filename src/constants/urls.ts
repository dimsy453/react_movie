const baseURL = 'https://api.themoviedb.org/3'

const movie = '/discover/movie'

const urls = {
    movie:{
        base:movie,
        ById:(id:number):string => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls
}