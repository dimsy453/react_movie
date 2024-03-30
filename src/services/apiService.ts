import axios from "axios";
import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQzM2ZhYWEzYzI4OGFhOTA4M2E3MTU4ZWY0NTg3YyIsInN1YiI6IjY1ZDlkNTE1OTNiZDY5MDE4NThjNDY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xwap4w1s_TbW_dckCIq3mKc1VGOruSC--ca3Pk9mZnk'
    return request
})
export {
    apiService
}