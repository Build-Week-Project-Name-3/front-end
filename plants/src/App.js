import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import axios from "axios";

import Header from './components/Header';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MainCard from './components/MainCard';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

function App()
{
    const [error, setError] = useState("");
    const history = createBrowserHistory({ forceRefresh: true });

    async function handleRegisterSubmit(data)
    {
        axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/register', data)
            .then((res) => 
            {
                console.log("register response:", res);

                // redirect to login page
                history.push("/login");
            })
            .catch((err) => 
            {
                console.log(err);
                setError(err.toString());
            });

    }

    async function handleLoginSubmit(data)
    {
        axios.post('https://build-week-water-my-plants-1.herokuapp.com/api/auth/login', data)
            .then((res) => 
            {
                console.log("login response:", res);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("userId", res.data.user_id);

                // redirecting to home page for now
                // TODO: redirect to dashboard
                history.push("/");
            })
            .catch((err) => 
            {
                console.log(err);
                setError(err.toString());
            });
    }

    return (
        <>
            <CssBaseline />

            <Header />

            <div>
                {error && <p>{error}</p>}
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