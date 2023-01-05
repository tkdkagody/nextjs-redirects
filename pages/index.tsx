import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Movie from "../components/Movie";
import Seo from "../components/Seo";
import { SERVER_URL } from "../constants";
import { MovieInfo } from "../types";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <div className="container">
      <Seo title="Home" />
      {data?.map((stage: MovieInfo) => (
        <div key={stage._id}>
          <Movie
            id={stage._id}
            poster_path={stage.thumbnailUrl}
            title={stage.title}
          />
        </div>
      ))}

      {/* style */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  //const { results } = await (await fetch(`${SERVER_URL}/api/movies`)).json();

  const response = await (
    await fetch(`https://moverse.club/api/v1/main/stage/stages`)
  ).json();

  console.log(response.stages);

  const data = response.stages;
  return {
    props: {
      data,
    },
  };
};
export default Home;
