import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="border-b mb-2">
          <h2>
            {post.id} {post.title}
          </h2>
          <Link className="bg-green-500 p-1 m-3" href={`/posts/${post.id}`}>
            See more..
          </Link>
        </div>
      ))}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await data.json();

  return {
    props: {
      posts: jsonData,
    },
  };
}
