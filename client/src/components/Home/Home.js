import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Posts from "../posts/Posts";
import Form from "../form/Form";
import { getPosts } from "../../actions/posts";

function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-col sm:grid sm:grid-cols-12 m-auto my-8 mx-3">
        <div className="m-auto justify-center mt-4 sm:col-span-8 sm:m-auto">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="sm:col-span-4 mb-8">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Home;
