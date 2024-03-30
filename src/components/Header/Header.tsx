
import React from "react";
// import {AppBar, Container, MenuItem, Toolbar, Typography} from "@mui/material";
import css from './Header.module.css'

// const pages = ['Home', 'Films', 'Search'];
const Header = () => {

    return (
        <div className={css.Header}>
            <div>
                <h1>MovieDB</h1>
            </div>

            <div className={css.tools}>
                <button> Home</button>
                <button> Films</button>
                <button>Search</button>

            </div>

            <div className={css.avatar}> avatar </div>
        </div>

        // <AppBar position="static">
        //     <Container maxWidth="xl"
        //                sx ={{
        //                    display:'flex',
        //                    justifyContent:'space-between'}}>
        //         <Toolbar disableGutters>
        //             <Typography
        //                 variant="h4"
        //                 noWrap
        //                 sx={{
        //                     mr: 2,
        //                     display: { xs: 'none', md: 'flex' },
        //                     fontFamily: 'monospace',
        //                     fontWeight: 700,
        //                     letterSpacing: '.3rem',
        //                     color: 'inherit',
        //                     textDecoration: 'none',
        //                 }}
        //             >
        //                 MovieDB
        //             </Typography>
        //         </Toolbar>
        //         <Toolbar>
        //             {pages.map((page) => (
        //                 <MenuItem key={page} >
        //                     <Typography textAlign="center">{page}</Typography>
        //                 </MenuItem>
        //             ))}
        //
        //         </Toolbar>
        //     </Container>
        // </AppBar>
    );
};

export {Header}