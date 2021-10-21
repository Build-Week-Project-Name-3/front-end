import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { maxHeight } from "@mui/system";
import React from "react";

export default function MainCard() {
    const imgHeight = window.innerHeight * 0.775;
    return (
        <Card sx={{ width: 2/2 }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height= {imgHeight} 
                    image="https://images.unsplash.com/photo-1555037015-1498966bcd7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    title="Water Drops on Leaves"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">Happy Plants, Happy Lives</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Taking excellent care of your plants improves the quality of life. It is not always easy to remember to care for your plants. Life gets busy. We understand. That is why we are here to help! Sign up to have detailed instructions on how to care for each of the different species of plants you have in your care. We're here for you!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}