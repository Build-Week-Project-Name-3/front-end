import './App.css';
import React from 'react'
import Plant from './Plant';
import Header from './Header'
import ReactDOM from 'react-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import GrassIcon from '@mui/icons-material/Grass'
import MainCard from './MainCard';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import axios from "axios";
const appStyle = {
	height: '250px',
  	display: 'flex'
};

function App() {

    async function handleRegisterSubmit(data) {
      const res = await axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/register', data);
      console.log(res);
    }
    async function handleLoginSubmit(data) {
      const res = await axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/login', data);
      console.log(res);
    }
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

      <RegisterForm onSubmit={handleRegisterSubmit} />
        <LoginForm onSubmit={handleLoginSubmit} />
    </>
  );
}

export default App;
