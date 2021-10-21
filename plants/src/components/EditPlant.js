import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { createBrowserHistory } from "history";

const initialState = {
  plant_name: "",
  plant_species: "",
  h2oFrequency: 0,
  image_url: "",
};

const EditPlantForm = (props) => {
  const [plantValues, setPlantValues] = useState(initialState);
  const history = createBrowserHistory({ forceRefresh: true });
  const { plants, setPlants, setError } = props;
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${id}`)
      .then((res) => {
        console.log(res);
        setPlantValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setPlantValues({
      ...plantValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/plants/${id}`, plantValues)
      .then((res) => {
        console.log(res);
        const newPlants = plants.filter((item) => item.plant_id !== id);
        newPlants.push(res.data);
        setPlants([...newPlants]);
        history.push("/plants");
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="container">
      <div>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>Edit Plant</h2>
          <div>
            <div>
              <label>
                Plant Name*
                <input
                  style={inputStyle}
                  type="text"
                  name="plant_name"
                  id="plant_name"
                  onChange={handleChange}
                  value={plantValues.plant_name}
                />
              </label>
            </div>
            <div>
              <label>
                Species*
                <input
                  style={inputStyle}
                  type="text"
                  name="plant_species"
                  id="plant_species"
                  onChange={handleChange}
                  value={plantValues.plant_species}
                />
              </label>
            </div>
            <div>
              <label>
                Watering Frequency*
                <input
                  style={inputStyle}
                  type="number"
                  name="h2oFrequency"
                  id="h2oFrequency"
                  onChange={handleChange}
                  value={plantValues.h2oFrequency}
                />
              </label>
            </div>
            <div>
              <label>
                Image URL
                <input
                  style={inputStyle}
                  type="text"
                  name="image_url"
                  id="image_url"
                  onChange={handleChange}
                  value={plantValues.image_url}
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

export default EditPlantForm;
