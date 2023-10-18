import React, { useRef, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { validateEmailPasswordName } from "../Utils/validation";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfo, userLoginStatus } from "../Utils/Redux/userSlice";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [newuserformError, setNewUserFormError] = useState("");

  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNewUserFormSubmission = async () => {
    const formvalidationMessage = validateEmailPasswordName(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setNewUserFormError(formvalidationMessage);

    if (formvalidationMessage == null) {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(userLoginStatus(true));
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUserInfo({
                  uid: uid,
                  mail: email,
                  name: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setNewUserFormError(error + errorMessage);
        });
    }

    setTimeout(() => {
      setNewUserFormError(null);
    }, 4000);
  };

  const handleLoginFormSubmission = async () => {
    await signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
   
        const { displayName, email, uid } = user;
        dispatch(userLoginStatus(true));
        dispatch(
          addUserInfo({
            uid: uid,
            mail: email,
            name: displayName,
          })
        );

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode + errorMessage);
        setTimeout(() => {
          setLoginError(null);
        }, 4000);
      });
  };

  const handleNewUserForm = () => {
    if (newUser === false) {
      setNewUser(true);
    } else {
      setNewUser(false);
    }
  };

  return (
    <>
      <Header />
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
                  ref={name}
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
              ref={email}
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-4/5 mx-auto mb-8 border-4"
            />
            <label className="font-medium mx-auto">Password</label>
            <input
              ref={password}
              type="password"
              placeholder="Enter Your Password"
              className="p-3  w-4/5 mx-auto mb-8 border-4"
            />
            {newUser ? (
              <button
                className=" w-4/5 mx-auto p-4 bg-blue-600 text-lg font-bold"
                onClick={handleNewUserFormSubmission}
              >
                SIGNUP
              </button>
            ) : (
              <button
                className=" w-4/5 mx-auto p-4 bg-blue-600 text-lg font-bold"
                onClick={handleLoginFormSubmission}
              >
                LOGIN
              </button>
            )}
          </form>
          <p
            className="text-lg text-center mt-3 cursor-pointer"
            onClick={handleNewUserForm}
          >
            {newUser
              ? "Already have an account? Login Now"
              : " Don't have an account? Sign Up"}
          </p>
          {newuserformError && newUser && (
            <div
              className="bg-red-500 bg-opacity-50 border border-red-700 w-60 h-20 rounded-lg text-center absolute top-60 right-0 mr-5 lg:top-28"
              style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
            >
              <p className="text-white text-xl mt-4">
                {newuserformError}
                <span>
                  <SentimentVeryDissatisfiedIcon />
                </span>
              </p>
            </div>
          )}

          {loginError && (
            <>
              <div
                className="bg-red-500 bg-opacity-50 border border-red-700 w-60 h-20 rounded-lg text-center absolute top-60 right-0 mr-5 lg:top-28"
                style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
              >
                <p className="text-white text-xl mt-4">
                  {loginError}
                  <span>
                    <SentimentVeryDissatisfiedIcon />
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
