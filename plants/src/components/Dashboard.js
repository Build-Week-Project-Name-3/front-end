
import react from 'react'
import Plant from './Plant'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function () {
    const imgHeight = window.innerHeight * 0.5;

    return (
        <>
            <Card sx={{ width: 2/2 }}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height= {imgHeight} 
                        image="https://gardenshf.org/wp-content/uploads/2016/06/AdobeStock_92059327-scaled.jpeg"
                        title="Plant in hands"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">These are the plants that are currenly in your care:</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Plant />
            {/* I know this ^ needs a .map but I am really lame with .map...when I entered it on my sprint it made all my tests fail lol! */}

        </>
    )
}