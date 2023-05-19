import Link from "next/link";
import React, { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data);
    fetchComments()
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit comment</button>
      </div>

      <button onClick={fetchComments} className="border m-2 p-1">
        Load comments
      </button>
      {comments.map((comment) => (
        <div key={comment.id}>
           <Link href={`/comments/${comment.id}`}> {comment.id} {comment.text}</Link>
          <button
            onClick={() => deleteComment(comment.id)}
            className="border m-2 p-1"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
