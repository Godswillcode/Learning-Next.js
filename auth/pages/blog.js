import { getSession } from "next-auth/react";
import React from "react";

function Blog({ data }) {
  return <div>blog page - {data}</div>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
