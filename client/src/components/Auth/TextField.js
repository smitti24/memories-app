import { Input } from "@material-tailwind/react";
import React from "react";

const TextField = ({ name, label, handleChange, type, autoFocus }) => {
  return (
    <Input
      name={name}
      label={label}
      onChange={handleChange}
      type={type}
      required
      autoFocus={autoFocus}
    ></Input>
  );
};

export default TextField;
