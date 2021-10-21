import React, { useEffect } from 'react';
import axiosWithAuth from '../utilites/axiosWithAuth';
import { createBrowserHistory } from "history";

const Logout = (props) =>
{
    const history = createBrowserHistory({ forceRefresh: true });

    useEffect(() =>
    {
        axiosWithAuth()
            .post("https://build-week-water-my-plants-1.herokuapp.com/api/auth/logout")
            .then((res) =>
            {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("userID");
                history.push("/");
            })
            .catch((err) =>
            {
                console.log({ err });
            });
    }, []);


    return (<div></div>);
};

export default Logout;