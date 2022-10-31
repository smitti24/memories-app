import React, { useState, useEffect } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

function Form({ currentId, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    currentId === 0
      ? dispatch(
          updatePost(currentId, { ...postData, name: user?.result?.name })
        )
      : dispatch(createPost({ ...postData, name: user?.result?.name }));

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    post && setPostData(post);
  }, [post]);

  if (!user?.result?.name) {
    return (
      <div elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </div>
    );
  }

  return (
    <>
      <form
        className="shadow-xl p-6 text-center rounded-lg"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">
          {" "}
          {currentId ? "Editing" : "Create"} a memory
        </h1>
        <div className="pb-4">
          <Input
            label="Title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
          />
        </div>
        <div className="pb-4">
          <Input
            label="Message"
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            value={postData.message}
          />
        </div>
        <div className="pb-4">
          <Input
            label="Tags"
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            value={postData.tags}
          />
        </div>
        <div className="pb-4 text-start">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="pb-4">
          <Button className="w-full" variant="outlined" type="submit">
            Submit
          </Button>
        </div>
        <div>
          <Button
            className="w-full"
            color="red"
            variant="outlined"
            onClick={() => clear()}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
