import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';

export default function Header()
{
    const isLoggedIn = localStorage.getItem("token");
    console.log("isLoggedIn", isLoggedIn);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <GrassIcon size="large" sx={{ mr: 3 }} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Water My Plants</Typography>
                    <Link to="/"><Button color="secondary" size="medium" variant="contained">Home</Button></Link>
                    {!isLoggedIn && <Link to="/login"><Button color="secondary" size="medium" variant="contained">Login</Button></Link>}
                    {!isLoggedIn && <Link to="/register"><Button color="secondary" size="medium" variant="contained">Register</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}