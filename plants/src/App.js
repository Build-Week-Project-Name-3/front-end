import './App.css';
import React from 'react'
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
        <RegisterForm onSubmit={handleRegisterSubmit} />
        <LoginForm onSubmit={handleLoginSubmit} />
      </main>
    </>
  );
}

export default App;
