import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { useState } from "react";
import { StageDetail } from "../../types";
import Seo from "../../components/Seo";
import { SERVER_URL } from "../../constants";

function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [stageDetail, setStageDetail] = useState<StageDetail>(data.stage);

  return (
    <MainContainer>
      <Seo title={stageDetail.title} />
      <BackImage src={stageDetail.thumbnailUrl} alt={stageDetail.title} />
      <Title>{stageDetail.title}</Title>
    </MainContainer>
  );
}
export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(
    //`https://moverse.club/api/v1/main/stage/stages/${stageId}`
    `https://moverse.club/api/v1/main/stage/stages/${id}`
  );
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
`;

const BackImage = styled.img``;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`;

const AdultBadge = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const SubTitle = styled.span`
  font-size: 13px;
`;

const Release = styled.p`
  font-weight: bold;
  margin-top: 2px;
`;

const Runtime = styled(Release)``;

const Overview = styled.p`
  padding: 20px 20px 20px 20px;
  border: 3px solid #222222;
  border-radius: 10px;
  font-size: 16px;
`;
