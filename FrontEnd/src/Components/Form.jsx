import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signItUp } from "../FormFunctions/signUp";
import { logItUp } from "../FormFunctions/logItUp";

const Form = ({ AlreadyUser, NewUser, Login, signUp }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const goTo = (e) => {
    navigate(`/${e}`);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await signItUp(userName, passWord, email);
    if (response === 201) {
      setUserName("");
      setPassword("");
      setEmail("");
      console.log("User registered successfully");
      navigate("/Login");
    } else {
      console.log("Registration Failed !");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await logItUp(userName, passWord);

    if (response === 201) {
      console.log("user exist");
      navigate("/");
    }
    if (response === 404) {
      setPasswordError(false);
      setUserNameError(true);
      console.log("invalid username");
    }
    if (response === 401) {
      setUserNameError(false);
      setPasswordError(true);
      console.log("invalid password");
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
            {userNameError ? (
              <span className="text-red-600 text-center">Invalid username</span>
            ) : null}
            {passwordError ? (
              <span className="text-center text-red-600">Invalid password</span>
            ) : null}
          </p>

          {Login ? (
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full sm:w-[60%] p-3 text-white bg-sky-950 m-auto rounded-md font-bold hover:bg-sky-900"
            >
              SIGNUP
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full sm:w-[60%] p-3 text-white bg-sky-950 m-auto rounded-md font-bold hover:bg-sky-900"
            >
              LOGIN
            </button>
          )}

          <button
            type="submit"
            className="w-full sm:w-[60%] p-3 text-white bg-red-700 m-auto rounded-md font-bold hover:bg-red-600"
          >
            CONTINUE WITH GOOGLE
          </button>
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
