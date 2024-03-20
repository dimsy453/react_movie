import {Outlet} from "react-router-dom";
import {movieService} from "../services";
import {Header} from "../components";



const MainLayout = () => {
    movieService.getAll().then(({data})=> console.log(data))
    return (

        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}