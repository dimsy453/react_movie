import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviePage} from "./pages";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'movie'}/>
            },
            {
                path: 'movie', element:<MoviePage/>
            }
        ]
    }
])

export {
    router
}