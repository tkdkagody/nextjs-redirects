import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Stage from "../components/Stage";
import Seo from "../components/Seo";
import { StageInfo } from "../types";

const Stages = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container">
      <Seo title="Stages" img={""} />
      {/* {data?.map((stage: StageInfo) => {
        return (
          <div key={stage._id} className="stageWrapper">
            <Stage
              _id={stage._id}
              thumbnailUrl={stage.thumbnailUrl}
              title={stage.title}
            />
          </div>
        );
      })} */}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-content: stretch;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          padding: 0.5rem 2.5%;
        }
        .stageWrapper {
          width: 40%;
          margin-bottom: 100px;
        }
      `}</style>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (
    await fetch(`${process.env.APP_DOMAIN}/stage/stages`)
  ).json();
  const data = response.stages;
  return {
    props: {
      data,
    },
  };
};
export default Stages;
