import { comments } from "@/data/comments";

function SingleComment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export default SingleComment;

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  //   DO NOT DO THIS
  //   const response = await fetch(`/api/comments/${params.commentId}`);
  //   const data = await response.json();
  //   if (!data.id) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      comment,
    },
    revalidate: 10,
  };
}
