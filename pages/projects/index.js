import { Container } from "@mui/material";
import ActionAreaCard from "../../components/ActionAreaCard";

export default function Projects({ projects }) {
  return (
    <Container>
      {projects.map((project) => {
        return <ActionAreaCard data={project} />;
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
