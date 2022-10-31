import memories from "../../assets/images/memories.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="py-4 md:mt-2 bg-white shadow-xl rounded-lg px-4 md:py-2 text-center flex-row md:flex">
      <div className="w-full flex justify-center md:justify-between items-center ">
        <Link to="/" className=" flex ">
          <h1 className="text-2xl md:text-5xl text-blue-600 font-bold px-4 pb-2">
            Memories
          </h1>
          <img
            className="w-8 h-8 md:w-10 md:h-10 self-center"
            src={memories}
            alt="memories"
          ></img>
        </Link>
      </div>

      {user?.result ? (
        <div className="flex md:min-w-[400px] items-center">
          <div className="flex md:mx-2 w-full">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={user?.result?.picture}
              alt={user?.result?.name}
            ></img>
            <div className="flex items-center justify-center md:mx-2 w-full text-2xl">
              {user?.result?.name}
            </div>
          </div>

          <Button variant="filled" color="gray" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/auth">
            <Button variant="filled" color="blue" Link=".">
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
