import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function ActionAreaCard({ data }) {
  const randImg = `https://picsum.photos/id/${(Math.random() * 100).toFixed(
    0
  )}/500/500`;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        href={{
          pathname: `/projects/${data.id}`,
          query: { randImg },
        }}>
        <CardActionArea>
          <CardMedia component="img" image={randImg} alt="image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
