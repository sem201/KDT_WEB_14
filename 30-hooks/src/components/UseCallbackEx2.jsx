import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();

  // [before]
  const getPost = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  };

  // [after]
  // const getPost = useCallback(async () => {
  //   const res = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}`
  //   );
  //   setPost(res.data);
  // }, [postId]);
  console.log(post);
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>UseCallbackEx2</h1>
      {post && (post.id ? post.title : "로딩중..")}
    </div>
  );
}
