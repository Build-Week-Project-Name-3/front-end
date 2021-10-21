import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import EditPlantForm from "./components/EditPlant";
import Header from "./components/Header";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MainCard from "./components/MainCard";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import editUserForm from "./components/editUserForm";
import Logout from "./components/Logout";
import AddPlantForm from "./components/addPlant";
import axiosWithAuth from "./utilities/axiosWithAuth";
import DeletePlantModal from "./components/DeletePlantModal";

function App() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState("");
  const history = createBrowserHistory({ forceRefresh: true });

  async function handleRegisterSubmit(data) {
    axios
      .post(
        "https://build-week-water-my-plants-1.herokuapp.com/api/auth/register",
        data
      )
      .then((res) => {
        console.log("register response:", res);

        // redirect to login page
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
      });
  }

  async function handleLoginSubmit(data) {
    axios
      .post(
        "https://build-week-water-my-plants-1.herokuapp.com/api/auth/login",
        data
      )
      .then((res) => {
        console.log("login response:", res);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("userId", res.data.user_id);
        history.push("/plants");
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
      });
  }

  async function handleAddPlant(data) {
    axiosWithAuth()
      .post("/plants", data)
      .then((res) => {
        setPlants(...plants, res.data);
        history.push("/plants");
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
      });
  }

  async function handleEditUser(data) {
    const user_id = sessionStorage.getItem("userId");
    axiosWithAuth()
      .put(`/users/${user_id}`, data)
      .then((res) => {
        console.log("update user response:", res);
        history.push("/plants");
      })
      .catch((err) => {
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

          <Route path="/logout" component={Logout} />

          <Route path="/account" component={editUserForm} setError={setError} />

          <Route path="/plants/add">
            <AddPlantForm onSubmit={handleAddPlant} setError={setError} />
          </Route>

          <Route path="/plants/delete/:id">
            <DeletePlantModal
              plants={plants}
              setPlants={setPlants}
              setError={setError}
            />
          </Route>

          <Route path="/plants/:id">
            <EditPlantForm
              setError={setError}
              plants={plants}
              setPlants={setPlants}
            />
          </Route>

          <Route path="/plants">
            <Dashboard
              setError={setError}
              plants={plants}
              setPlants={setPlants}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
