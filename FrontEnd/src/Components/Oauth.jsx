import React from "react";
import { app } from "../firebase.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Oauth = () => {
  const signInWithGoogle = async () => {
    const auth = getAuth(app); // 'app' is the Firebase app you initialized

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user)
      // Handle the signed-in user, e.g., update your UI
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="w-full sm:w-[60%] p-3 text-white bg-red-700 m-auto rounded-md font-bold hover:bg-red-600"
        onClick={signInWithGoogle}
      >
        CONTINUE WITH GOOGLE
      </button>
    </>
  );
};

export default Oauth;
