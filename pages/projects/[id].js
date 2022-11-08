import { useRouter } from "next/router";

export default function Details({ project }) {
  const imgUrl = useRouter().query.randImg;

  return (
    <div>
      <img src={imgUrl} alt="image" />
      <p>{project.title}</p>
      <p>{project.body}</p>
    </div>
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
