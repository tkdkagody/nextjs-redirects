import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Movie from "../components/Movie";
import Seo from "../components/Seo";
import { SERVER_URL } from "../constants";
import { MovieInfo } from "../types";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container">
      <Seo title="Home" />
      {data?.map((movie: MovieInfo) => (
        <div key={movie.id}>
          <Movie
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
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
  const { results } = await (await fetch(`${SERVER_URL}/api/movies`)).json();
  const data = results;
  return {
    props: {
      data,
    },
  };
};
export default Home;
