import React, { useEffect } from 'react';
import { createBrowserHistory } from "history";

const Logout = (props) =>
{
    const history = createBrowserHistory({ forceRefresh: true });

    useEffect(() =>
    {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userID");
        history.push("/");

    }, [history]);

    return (<div></div>);
};

export default Logout;