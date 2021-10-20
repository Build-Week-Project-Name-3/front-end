import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MainCard from './components/MainCard';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import axios from "axios";

function App()
{

    async function handleRegisterSubmit(data)
    {
        const res = await axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/register', data);
        console.log(res);
    }
    async function handleLoginSubmit(data)
    {
        const res = await axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/login', data);
        console.log(res);
    }
    return (
        <>
            <CssBaseline />

            <Header />

            <div>
                <Switch>
                    <Route exact path="/">
                        <MainCard />
                    </Route>

                    <Route path="/register">
                        <RegisterForm onSubmit={handleRegisterSubmit} />
                    </Route>

                    <Route path="/login">
                        <LoginForm onSubmit={handleLoginSubmit} />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;