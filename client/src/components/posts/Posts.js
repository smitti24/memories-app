import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {!posts.length ? (
        <img
          className="w-8- h-80 object-contain"
          src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
          alt=""
        ></img>
      ) : (
        <div className="flex flex-col sm:grid md:grid-cols-2 sm:gap-4 sm:grid-cols-1">
          {posts?.map((post) => (
            <Post postData={post} key={post._id} setCurrentId={setCurrentId} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
