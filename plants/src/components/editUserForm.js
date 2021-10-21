import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { createBrowserHistory } from "history";

const initialState = {
  username: "",
  password: "",
  phoneNumber: 0,
};

const EditUserForm = (props) => {
  const [userValues, setUserValues] = useState(initialState);
  const history = createBrowserHistory({ forceRefresh: true });
  const { setError } = props;
  const user_id = sessionStorage.getItem("userId");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${user_id}`)
      .then((res) => {
        console.log(res);
        setUserValues({ ...res.data, password: "" });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${user_id}`, userValues)
      .then((res) => {
        console.log(res);
        history.push("/plants");
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="container">
      <div>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>Edit User</h2>
          <div>
            <div>
              <label>
                Username*
                <input
                  style={inputStyle}
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  value={userValues.username}
                />
              </label>
            </div>
            <div>
              <label>
                Password*
                <input
                  style={inputStyle}
                  type="text"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={userValues.password}
                />
              </label>
            </div>
            <div>
              <label>
                Phone Number*
                <input
                  style={inputStyle}
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={handleChange}
                  value={userValues.phoneNumber}
                />
              </label>
            </div>
            <div>
              <Link style={submitStyle} to="/plants" className="button">
                Back
              </Link>
            </div>
            <div>
              <button style={submitStyle} className="md-button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "220px",
  display: "block",
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%",
};

const submitStyle = {
  textDecoration: "none",
  textAlign: "center",
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
};

export default EditUserForm;
