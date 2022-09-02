import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";

function Form() {
  const handleSubmit = () => {};

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
          <Input label="Creator" />
        </div>
        <div className="pb-4">
          <Input label="Title" />
        </div>
        <div className="pb-4">
          <Input label="Message" />
        </div>
        <div className="pb-4">
          <Input label="Tags" />
        </div>
        <div className="pb-4">
          <input
            className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
        <div className="pb-4">
          <Button className="w-full" variant="outlined">
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
