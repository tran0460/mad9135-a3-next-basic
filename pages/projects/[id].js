import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

export default function Details({ project }) {
  const imgUrl = useRouter().query.randImg;

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
      }}>
      <img src={imgUrl} alt="image" style={{ width: "50%" }} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="h5">{project.body}</Typography>
      </Container>
    </Container>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(
    "http://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  const data = await resp.json();

  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/posts/" + id
  );
  const data = await response.json();

  if (!data) return { notFound: true };
  return {
    props: {
      project: data,
    },
  };
}
