import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const Auth = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ", signUpData);
  };

  return (
    <div className="m-auto w-full flex flex-row justify-center ">
      <div className="my-20 bg-white shadow-xl align-middle ">
        <div className="mx-5 my-5">
          <form autoComplete="on" noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col text-center">
              <div>Sign up image</div>
              <div className="text-2xl font-bold">Sign Up</div>
            </div>
            <div className="flex flex-row justify-between my-4">
              <div className="mr-4">
                <Input
                  label="First Name *"
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, firstName: e.target.value })
                  }
                  value={signUpData.firstName}
                />
              </div>
              <div>
                <Input
                  label="Last Name *"
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, lastName: e.target.value })
                  }
                  value={signUpData.lastName}
                />
              </div>
            </div>
            <div className="mb-4">
              <Input
                label="Email Address *"
                type="email"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
                value={signUpData.email}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Password *"
                type="password"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                value={signUpData.password}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Repeat Password *"
                type="password"
                onChange={(e) =>
                  setSignUpData({
                    ...signUpData,
                    repeatPassword: e.target.value,
                  })
                }
                value={signUpData.repeatPassword}
              />
            </div>
            <div className="pb-4">
              <Button className="w-full" variant="outlined" type="submit">
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                className="w-full"
                color="light-green"
                variant="outlined"
                onClick={() => ""}
              >
                Already have an account? SIGN IN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
