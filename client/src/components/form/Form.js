import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import FileBase from "react-file-base64";

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
  };

  return (
    <>
      <form
        className="shadow-xl p-6 text-center rounded-lg"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Create a memory</h1>
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
            value={postData.tags}
          />
        </div>
        <div className="pb-4">
          <Input
            label="Tags"
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            value={postData.creator}
          />
        </div>
        <div className="pb-4">
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
          <Button className="w-full" color="red" variant="outlined">
            Clear
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
