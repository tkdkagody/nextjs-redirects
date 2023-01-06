import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { StageDetail } from "../../types";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [stageDetail, setStageDetail] = useState<StageDetail>(data.stage);
  const router = useRouter();

  useEffect(() => {
    router.push(`https://moverse.club/stages/${data.stage._id}`);
  }, []);

  return (
    <MainContainer>
      <Seo title={stageDetail.title} img={stageDetail.thumbnailUrl} />
      <BackImage src={stageDetail.thumbnailUrl} alt={stageDetail.title} />
      <Title>{stageDetail.title}</Title>
    </MainContainer>
  );
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${process.env.APP_DOMAIN}/stage/stages/${id}`);
  const data: StageDetail = await res.json();
  return {
    props: {
      data,
    },
  };
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-left: 12px;
  margin-right: 12px;
  width: 50vw;
`;

const BackImage = styled.img``;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`;
