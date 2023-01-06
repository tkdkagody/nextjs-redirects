import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../components/Seo";

const Stages = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container">
      <Seo title="Stages" img={""} />
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
