import Head from "next/head";
import { SeoProps } from "../types";

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>MOVERSE.CLUB</title>
      <meta property="og:title" content={title} />
      {/* <meta property="og:url" content="https://moverse.club/" /> */}
      <meta
        property="og:description"
        content="3D Motion Solution, Your Move Universe"
      />
    </Head>
  );
};

export default Seo;
