import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function ActionAreaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://picsum.photos/id/${(Math.random() * 100).toFixed(
            0
          )}/300/200`}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.body}
          </Typography>
          <Link href={`/projects/${data.id}`}>See more</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
