import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Stage from "../components/Stage";
import Seo from "../components/Seo";
import { SERVER_URL } from "../constants";
import { StageInfo } from "../types";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container">
      <Seo title="Home" img={""} />
      {data?.map((stage: StageInfo) => {
        console.log(stage);
        return (
          <div key={stage._id}>
            <Stage
              _id={stage._id}
              thumbnailUrl={stage.thumbnailUrl}
              title={stage.title}
            />
          </div>
        );
      })}

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
