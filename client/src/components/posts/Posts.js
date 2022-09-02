import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <h1 className="text-3xl font-bold">POSTS</h1>

      <Post />
      <Post />
    </div>
  );
}

export default Posts;
