import Link from "next/link";
export default function Projects({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <p>{project.title}</p>
            <p>{project.body}</p>
            <Link href={`/projects/${project.id}`}>See more</Link>
            <p>***********</p>
          </div>
        );
      })}
    </div>
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
