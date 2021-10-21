import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';

export default function Header()
{
    const isLoggedIn = sessionStorage.getItem("token");
    console.log("isLoggedIn", isLoggedIn);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <GrassIcon size="large" sx={{ mr: 3 }} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Water My Plants</Typography>
                    <Link style={LinkStyle} to="/"><Button color="secondary" size="medium" variant="contained">Home</Button></Link>
                    {!isLoggedIn && <Link style={LinkStyle} to="/login"><Button color="secondary" size="medium" variant="contained">Login</Button></Link>}
                    {!isLoggedIn && <Link style={LinkStyle} to="/register"><Button color="secondary" size="medium" variant="contained">Register</Button></Link>}
                    {isLoggedIn && <Link style={LinkStyle} to="/plants"><Button color="secondary" size="medium" variant="contained">My Plants</Button></Link>}
                    {isLoggedIn && <Link style={LinkStyle} to="/account"><Button color="secondary" size="medium" variant="contained">Account</Button></Link>}
                    {isLoggedIn && <Link style={LinkStyle} to="/logout"><Button color="secondary" size="medium" variant="contained">Logout</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
const LinkStyle = {
    textDecoration: "none",  
};