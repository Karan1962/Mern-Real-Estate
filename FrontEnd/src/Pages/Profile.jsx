import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="pt-16 max-w-lg m-auto">
        <h1 className="text-3xl font-bold text-center py-4">Profile</h1>
        <img
          className="rounded-full w-14 object-cover m-auto cursor-pointer"
          src={currentUser.avatar}
          alt="avatar"
        />
        <form className="flex flex-col gap-3 pt-3">
          <input
            className="p-3 rounded-lg"
            placeholder="username"
            type="text"
          />
          <input className="p-3 rounded-lg" placeholder="email" type="text" />
          <input
            className="p-3 rounded-lg"
            placeholder="password"
            type="text"
          />
          <button className="p-3 rounded-lg bg-indigo-900 font-semibold text-white hover:bg-indigo-800">
            UPDATE
          </button>
        </form>
        <div className="flex justify-between pt-4">
          <span className="text-red-600  font-medium cursor-pointer">
            Delete Account
          </span>
          <span className="text-red-600 font-medium cursor-pointer">
            Sign Out
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
