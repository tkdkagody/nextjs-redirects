import Head from "next/head";
import { SeoProps } from "../types";

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Seo;
