import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { StageDetail } from "../../types";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  useEffect(() => {
    router.push(`https://moverse.club/stages/${data.stage._id}`);
  }, []);

  return <div></div>;
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
