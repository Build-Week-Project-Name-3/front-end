import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import { createBrowserHistory } from "history";

export default function Plant(props) {
  const history = createBrowserHistory({ forceRefresh: true });
  const { plant } = props;
  const handleEdit = (e) => {
    history.push(`/plants/${plant.plant_id}`);
  };

  const handleDelete = (e) => {
    history.push(`/plants/delete/${plant.plant_id}`);
  };

  return (
    <Card sx={{ maxWidth: 500, borderRadius: 10 }} variant="outlined">
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" component="div">
          Name: {plant.plant_name}
        </Typography>
        <CardMedia component="img" height="150" image={plant.image_url} />
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Water Frequency: {plant.h2oFrequency}
        </Typography>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          Species: {plant.plant_species}
        </Typography>
        <ButtonGroup disableElevation variant="contained">
          <Button onClick={handleEdit}>Edit Plant</Button>
          <Button onClick={handleDelete} variant="outlined">Delete Plant</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
