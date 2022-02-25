import Head from "next/head";
import React from "react";

function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default Seo;
