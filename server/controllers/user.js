import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import user from "../models/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1hr" }
    ); // Test is the secret (can be saved somewhere in the project)

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signUp = async (req, res) => {
  const { email, firstName, lastName, password, repeatPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    if (password !== repeatPassword)
      return res.status(400).json({ message: "Passwords dont match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1hr",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
