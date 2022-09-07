import React, { useEffect, useState } from "react";
import memories from "../src/assets/images/memories.png";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <div className="max-w-[1280px] m-auto">
        <div className="mt-4 bg-white shadow-xl rounded-lg px-4 py-2 text-center flex justify-center">
          <h1 className="text-5xl text-blue-600 font-bold px-4 pb-2">
            Memories
          </h1>
          <img
            className="w-10 h-10 self-center"
            src={memories}
            alt="memories"
          ></img>
        </div>

        <div className="flex flex-col-reverse md:flex-col sm:grid sm:grid-cols-12 m-auto my-8 mx-3">
          <div className="m-auto justify-center mt-4 sm:col-span-8 sm:m-auto">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="sm:col-span-4 mb-8">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
