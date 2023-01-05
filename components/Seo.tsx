import Head from "next/head";
import { SeoProps } from "../types";

const Seo = ({ title, img }: SeoProps) => {
  return (
    <Head>
      <title>{title} </title>
      <meta
        property="og:description"
        content="3D Motion Solution, Your Move Universe"
      />
      <meta property="og:image" content={img ? img : ""} />
    </Head>
  );
};

export default Seo;
