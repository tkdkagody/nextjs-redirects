import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Movie from "../components/Movie";
import Seo from "../components/Seo";
import { SERVER_URL } from "../constants";
import { MovieInfo } from "../types";

const upcoming = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container">
      <Seo title="개봉예정" />
      {data?.map((movie: MovieInfo) => (
        <>
          <Movie
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        </>
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
  const { results } = await (
    await fetch(`${SERVER_URL}/api/movies/upcoming`)
  ).json();
  const data = results;
  return {
    props: {
      data,
    },
  };
};

export default upcoming;
