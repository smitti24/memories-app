import memories from "../../assets/images/memories.png";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react/components/Button";

function Navbar() {
  const user = null;

  return (
    <div>
      <div className="mt-4 bg-white shadow-xl rounded-lg px-4 py-2 text-center flex">
        <Link to="/" className="justify-center w-full flex">
          <h1 className="text-5xl text-blue-600 font-bold px-4 pb-2">
            Memories
          </h1>
          <img
            className="w-10 h-10 self-center"
            src={memories}
            alt="memories"
          ></img>
        </Link>
        {user ? (
          <div>
            <img
              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt={user.result.name}
            >
              {user.result.name.charAt(0)}
            </img>
            <div>{user.result.name}</div>
            <Button variant="filled" color="gray">
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Link to="/auth">
              <Button variant="filled" color="blue" Link=".">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
