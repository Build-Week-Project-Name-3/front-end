import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory, useParams } from "react-router";
import { createBrowserHistory } from "history";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Typography } from "@mui/material";

const initialState = {
  plant_name: "",
  plant_species: "",
  h2oFrequency: 0,
  image_url: "",
};

const DeletePlantModal = (props) => {
  const [deletedPlant, setDeletedPlant] = useState(initialState);
  const { plants, setPlants, setError } = props;
  const { id } = useParams();
  const history = createBrowserHistory({ forceRefresh: true });

  useEffect(() => {
    console.log("id", id);
    axiosWithAuth()
      .get(`/plants/${id}`)
      .then((res) => {
        console.log(res.data);
        setDeletedPlant(res.data);
      })
      .catch((err) => setError(err));
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/plants/${id}`)
      .then((res) => {
        setPlants(plants.filter((item) => item.plant_id !== id));
        history.push("/plants");
      })
      .catch((err) => setError(err));
  };

  return (
    <div style={cardStyle} className="modal">
      <h2>Are you sure you want to delete {deletedPlant.plant_name}?</h2>
      <p className="errMsg">
        This action is permanent, changes can not be reverted
      </p>
      <Card sx={{ maxWidth: 500, borderRadius: 10 }} variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="div">
            Name: {deletedPlant.plant_name}
          </Typography>
          <CardMedia
            component="img"
            height="150"
            image={deletedPlant.image_url}
          />
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Water Frequency: {deletedPlant.h2oFrequency}
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Species: {deletedPlant.plant_species}
          </Typography>
          <ButtonGroup disableElevation variant="contained">
            <Button onClick={() => history.push("/plants")}>Back</Button>
            <Button onClick={handleDelete} variant="outlined">
              Delete Plant
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </div>
  );
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default DeletePlantModal;
