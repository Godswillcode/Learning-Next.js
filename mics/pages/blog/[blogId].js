import Head from "next/head";
import React from "react";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        Article, my username: {process.env.NEXT_PUBLIC_USERNAME}
      </h1>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user, password);
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
