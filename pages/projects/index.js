import { Container } from "@mui/material";
import ActionAreaCard from "../../components/ActionAreaCard";

export default function Projects({ projects }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { sx: "column", md: "row" },
        flexWrap: "wrap",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
      }}>
      {projects.map((project) => {
        return (
          <ActionAreaCard key={project.title} data={project} type={"project"} />
        );
      })}
    </Container>
  );
}

export async function getStaticProps() {
  const resp = await fetch(
    "http://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  const data = await resp.json();

  if (!data) return { notFound: true };
  return {
    props: {
      projects: data,
    },
  };
}
