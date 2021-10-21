import React, { useEffect } from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import { createBrowserHistory } from "history";

const Logout = (props) => {
  const history = createBrowserHistory({ forceRefresh: true });

  useEffect(() => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userID");
    history.push("/");
  }, []);

  return <div></div>;
};

export default Logout;
