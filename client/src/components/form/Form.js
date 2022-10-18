import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: "",
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
    currentId
      ? dispatch(updatePost(currentId, postData))
      : dispatch(createPost(postData));

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    post && setPostData(post);
  }, [post]);

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
            label="Creator"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            value={postData.creator}
          />
        </div>
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
