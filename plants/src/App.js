import './App.css';
import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import GrassIcon from '@mui/icons-material/Grass'
import MainCard from './MainCard';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <GrassIcon size="large" sx={{ mr: 3 }}/>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Water My Plants</Typography>
            <Button color="secondary" size="medium" variant="outlined">Sign Up Here</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <MainCard />
      </main>
    </>
  );
}

export default App;
