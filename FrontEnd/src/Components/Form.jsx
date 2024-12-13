import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signItUp } from "../FormFunctions/signUp";
import { logItUp } from "../FormFunctions/logItUp";
import {
  loading,
  noLoading,
  userNameError,
  passwordError,
  noError,
  currentUser,
} from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Oauth from "./Oauth";

const Form = ({ AlreadyUser, NewUser, Login, signUp }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(noError());
  }, []);

  const navigate = useNavigate();

  const goTo = (e) => {
    navigate(`/${e}`);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(loading());
    const response = await signItUp(userName, passWord, email);

    if (response === 201) {
      setUserName("");
      setPassword("");
      setEmail("");
      console.log("User registered successfully");
      dispatch(noLoading());
      dispatch(noError());
      navigate("/Login");
    } else {
      dispatch(noLoading());
      console.log("Registration Failed !");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loading());
    const response = await logItUp(userName, passWord);
    if (response.status === 201) {
      console.log("user exist :", response.data);
      dispatch(currentUser(response.data));
      dispatch(noLoading());
      dispatch(noError());
      navigate("/");
    }
    if (response.data.status === 404) {
      dispatch(userNameError());
      console.log(response.data);
      dispatch(noLoading());
    }
    if (response.data.status === 401) {
      dispatch(noLoading());
      dispatch(passwordError());
      console.log(response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center gap-3 items-center w-full sm:max-w-xl flex-col m-auto h-[100vh]">
        <h2 className="text-4xl font-bold text-gray-600">
          {Login ? "Sign Up" : "Login"}
        </h2>
        <form className="flex flex-col gap-5 w-[80%] sm:w-full">
          <input
            type="text"
            placeholder="username"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full sm:w-[60%] m-auto bg-white focus:outline-gray-200 rounded-md p-3"
          />
          {Login ? (
            <input
              type="email"
              placeholder="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[60%] m-auto focus:outline-gray-200 rounded-md p-3"
            />
          ) : null}
          <input
            type="password"
            placeholder="password"
            value={passWord}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full sm:w-[60%] m-auto  focus:outline-gray-200 rounded-md p-3"
          />
          <p className="text-center">
            {user.userNameError ? (
              <span className="text-red-600 text-center">Invalid username</span>
            ) : null}
            {user.passwordError ? (
              <span className="text-center text-red-600">Invalid password</span>
            ) : null}
          </p>

          {Login ? (
            <button
              disabled={user.loading}
              type="submit"
              onClick={handleSignUp}
              className="w-full sm:w-[60%] p-3 text-white bg-sky-950 m-auto rounded-md font-bold hover:bg-sky-900"
            >
              {user.loading ? "LOADING..." : "SIGN UP"}
            </button>
          ) : (
            <button
              disabled={user.loading}
              type="submit"
              onClick={handleLogin}
              className="w-full sm:w-[60%] p-3 text-white bg-sky-950 m-auto rounded-md font-bold hover:bg-sky-900"
            >
              {user.loading ? "LOADING..." : "LOGIN"}
            </button>
          )}

          <Oauth />
        </form>
        {Login ? (
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <h3>{AlreadyUser}</h3>
            <p
              onClick={() => goTo("Login")}
              className="text-sky-600 hover:underline cursor-pointer text-center"
            >
              {Login}
            </p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <h3 className="text-center">{NewUser}</h3>
            <p
              onClick={() => goTo("Signup")}
              className="text-sky-600 hover:underline cursor-pointer text-center"
            >
              {signUp}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
