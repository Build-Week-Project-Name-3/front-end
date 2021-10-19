import './App.css';
import React from 'react'
import { CssBaseline, Box } from '@mui/material'
import MainCard from './MainCard';
import Plant from './Plant';
import Header from './Header'

function App() {
  return (
    <>
      <CssBaseline />
      
        <Header />
        <main>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <MainCard />
            <h2>An example of plant care instructions:</h2>
            <Plant />
          </Box>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default App;
