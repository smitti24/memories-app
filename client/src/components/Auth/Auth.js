import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import TextField from "./TextField";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../actions/auth";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState(initialFormState);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    isSignUp
      ? dispatch(signUp(signUpData, navigate))
      : dispatch(signIn(signUpData, navigate));
  };

  const googleSuccess = async (credentialResponse) => {
    const result = jwt(credentialResponse?.credential);
    const token = credentialResponse?.credential;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Google sign in failed, try again ", error);
  };

  return (
    <div className="m-auto w-full flex flex-row justify-center ">
      <div className="mt-10 md:my-20 bg-white shadow-xl align-middle min-w-[300px]">
        <div className="mx-5 my-5">
          <form autoComplete="on" noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col text-center">
              <div className="text-2xl font-bold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </div>
              <div>Sign up image</div>
            </div>
            <div className="md:flex md:flex-row md:justify-between md:my-0 md:mt-2 my-4">
              {isSignUp && (
                <>
                  <div className="mb-4 md:mr-4">
                    <TextField
                      autoFocus={true}
                      label="First Name *"
                      name="firstName"
                      handleChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          firstName: e.target.value,
                        })
                      }
                      value={signUpData.firstName}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Last Name *"
                      name="lastName"
                      handleChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          lastName: e.target.value,
                        })
                      }
                      value={signUpData.lastName}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="mb-4">
              <TextField
                label="Email Address *"
                type="email"
                name="email"
                handleChange={(e) =>
                  isSignUp
                    ? setSignUpData({ ...signUpData, email: e.target.value })
                    : setSignInData({ ...signInData, email: e.target.value })
                }
                value={signUpData.email}
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Password *"
                type="password"
                name="password"
                handleChange={(e) =>
                  isSignUp
                    ? setSignUpData({ ...signUpData, password: e.target.value })
                    : setSignInData({ ...signInData, password: e.target.value })
                }
                value={signUpData.password}
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <TextField
                  label="Repeat Password *"
                  type="password"
                  name="repeatPassword"
                  handleChange={(e) =>
                    setSignUpData({
                      ...signUpData,
                      repeatPassword: e.target.value,
                    })
                  }
                  value={signUpData.repeatPassword}
                />
              </div>
            )}

            <div className="pb-4 flex justify-center">
              <GoogleLogin
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}
              />
            </div>

            <div className="pb-4">
              <Button className="w-full" variant="outlined" type="submit">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </div>
            <div>
              <Button
                className="w-full"
                color="light-green"
                variant="outlined"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Already have an account? SIGN IN"
                  : "Dont have an account? SING UP"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
