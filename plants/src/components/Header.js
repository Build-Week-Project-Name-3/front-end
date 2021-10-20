import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import GrassIcon from '@mui/icons-material/Grass'

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <GrassIcon size="large" sx={{ mr: 3 }}/>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Water My Plants</Typography>
                    <Button color="secondary" size="medium" variant="contained">Signup/Login Here</Button>
                </Toolbar>
        </AppBar>
      </Box>
    )
}