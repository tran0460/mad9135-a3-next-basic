import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function ActionAreaCard({ data, type }) {
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
          {type == "project" ? (
            <>
              <CardMedia component="img" image={randImg} alt="image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.body}
                </Typography>
              </CardContent>
            </>
          ) : (
            <>
              {" "}
              <Image
                src={data.imageSrc}
                alt="me"
                width="345"
                height="345"
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {data.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Job Title: {data.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Level: {data.level}
                </Typography>
              </CardContent>
            </>
          )}
        </CardActionArea>
      </Link>
    </Card>
  );
}
