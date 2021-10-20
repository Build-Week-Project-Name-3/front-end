import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export default function Plant(props) {
    return (
        <Card sx={{ minWidth: 500, borderRadius: 10 }} variant="outlined">
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" component="div">
                    Name: {props.plant_name}
                </Typography>
                <CardMedia
                    component="img"
                    height="150"
                    image="{props.image_url}"
                />
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                    Water Frequency: {props.h20Frequency}
                </Typography>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                    Species: {props.plant_species}
                </Typography>
            </CardContent>
        </Card>
    )
}