import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const handleNewUserForm = () => {
    if (newUser === false) {
      setNewUser(true);
    } else {
      setNewUser(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-2xl font-bold m-2">
        <span>
          <LockIcon />
        </span>
        {newUser ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
      </div>
      <div className="mx-auto w-full mt-5 ">
        <form className="flex flex-col" onClick={(e) => e.preventDefault()}>
          {newUser ? (
            <>
              <label className="font-medium mx-auto">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="p-3  w-4/5 mx-auto mb-8 border-4"
              />
            </>
          ) : (
            ""
          )}
          <label className="font-medium mx-auto">Email</label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 w-4/5 mx-auto mb-8 border-4"
          />
          <label className="font-medium mx-auto">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="p-3  w-4/5 mx-auto mb-8 border-4"
          />
          <button className=" w-4/5 mx-auto p-4 bg-blue-600 text-lg font-bold">
            {newUser?'SIGN UP':'SIGN IN'}
          </button>
        </form>
        <p className="text-lg text-center mt-3 cursor-pointer" onClick={handleNewUserForm}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
