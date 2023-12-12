import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-sm shadow-slate-400 fixed w-full max-h-[75px] z-30">
      <nav className="flex px-3 justify-between items-center max-w-6xl m-auto h-[10vh]">
        <div className="font-bold text-lg text-slate-700 sm:text-2xl">
          <Link to="/">
            <span className="text-neutral-400 ">Karan</span>Estate
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex max-h-[30px] items-center justify-center w-28 sm:w-72 bg-white rounded-md"
        >
          <input
            type="text"
            placeholder="Search..."
            className="p-2 bg-transparent focus:outline-none w-[70%] sm:w-[85%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button  className="flex justify-center items-center w-[30%] sm:w-[15%] cursor-pointer">
            <FaSearch />
          </button>
        </form>

        <div className="flex justify-evenly sm:w-[30%] text-xs sm:text-base sm:font-normal">
          <Link
            to="/About"
            className="hidden sm:inline text-slate-700 hover:text-neutral-400 "
          >
            About
          </Link>
          {currentUser ? null : (
            <Link
              to="/signup"
              className="hidden sm:inline text-slate-700 hover:text-neutral-400 "
            >
              Sign Up
            </Link>
          )}

          <Link
            to="/Profile"
            className="hover:text-neutral-400 text-slate-700 "
          >
            {currentUser ? (
              <img
                className="w-7 h-7 object-cover rounded-full"
                src={currentUser.avatar}
                alt="avatar"
              />
            ) : (
              "Login"
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
