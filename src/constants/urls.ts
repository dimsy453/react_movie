const baseURL = 'https://api.themoviedb.org/3/movie/11'

const auth = '/authentication'
const movie = '/discover/movie'

const urls = {
    auth:auth,
    movie:{
        base:movie,
        ById:(id:number):string => `${movie}/${id}`
    }
}

export {
    baseURL,
    urls
}