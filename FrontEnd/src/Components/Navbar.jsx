import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar.jsx";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvide.jsx";

const Navbar = () => {
  const { mode, setMode } = useTheme();
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
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-sm shadow-slate-400 fixed w-full max-h-[75px] z-30 dark:bg-[#0f0f0f] dark:shadow-[#1b1b1b]">
      <nav className="flex px-3 justify-between items-center max-w-6xl m-auto max-h-full py-3 ">
        <div className="font-bold text-lg text-slate-700 sm:text-2xl max-sm:hidden dark:text-[#8d8d8d]">
          <Link to="/">
            <span className="dark:text-[white] text-[#8d8d8d]">Karan</span>
            Estate
          </Link>
        </div>
        <div className=" sm:hidden">
          <Link to="/">
            <FaHome className="dark:text-white" />
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex max-h-[30px] items-center justify-center w-28 sm:w-72 bg-white rounded-md dark:bg-[#dfdfdf3b] dark:text-[white]"
        >
          <input
            type="text"
            placeholder="Search..."
            className="p-2 bg-transparent focus:outline-none w-[70%] sm:w-[85%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex justify-center items-center w-[30%] sm:w-[15%] cursor-pointer dark:text-[#ededed]">
            <FaSearch />
          </button>
        </form>

        <div className="flex gap-6 justify-evenly sm:w-[30%] text-xs sm:text-base sm:font-normal items-center  text-slate-700   dark:text-white">
          <Link to="/Home" className="hidden sm:inline hover:text-neutral-400">
            Home
          </Link>
          <Link to="/About" className="inline hover:text-neutral-400">
            About
          </Link>

          <Link to="/Profile" className="hover:text-neutral-400">
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
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <img
                  src={mode === "dark" ? "/assets/moon.svg" : "/assets/sun.svg"}
                  alt="theme"
                  height={20}
                  width={20}
                  className="dark:brightness-200 "
                />
              </MenubarTrigger>
              <MenubarContent className="min-w-[100px] absolute left-[-3rem]">
                {themes.map((item) => {
                  return (
                    <MenubarItem
                      key={item.id}
                      className="cursor-pointer  flex items-center gap-3 px-2.5 py-2 dark:focus:bg-dark-400"
                      onClick={() => {
                        localStorage.setItem("theme", item.value);
                        setMode(item.value);
                      }}
                    >
                      <img src={item.url} alt="theme" width={16} height={16} />
                      <p>{item.label}</p>
                    </MenubarItem>
                  );
                })}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
