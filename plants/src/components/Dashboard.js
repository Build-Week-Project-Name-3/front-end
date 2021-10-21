import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createBrowserHistory } from "history";
import axiosWithAuth from "../utilities/axiosWithAuth";

const Dashboard = (props) => {
  const imgHeight = window.innerHeight * 0.5;
  const { setError, plants, setPlants } = props;
  const history = createBrowserHistory({ forceRefresh: true });

  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <Card sx={{ width: 2 / 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={imgHeight}
            image="https://gardenshf.org/wp-content/uploads/2016/06/AdobeStock_92059327-scaled.jpeg"
            title="Plant in hands"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              These are the plants that are currently in your care:
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {plants.map((item, index) => (
        <Plant key={index} plant={item} />
      ))}
    </>
  );
};

export default Dashboard;
