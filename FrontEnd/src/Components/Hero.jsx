import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {

  return (
    <div className="pt-28 pb-6 px-3 max-w-6xl m-auto flex flex-col">
      <div className="text-3xl sm:text-6xl font-bold text-slate-700 ">
        Find your next <span className="text-neutral-400">perfect</span> <br />
        place with ease
      </div>
      <div className="text-base text-gray-400 py-6 ">
        OnlyEstate will help you find your home fast, easy and comfortable.
        <br />
        Our expert support are always available.
      </div>
      <Link to={"/search"}>
        <div className="text-indigo-800  font-bold hover:underline cursor-pointer w-fit">
          Let's Start Now...
        </div>
      </Link>
    </div>
  );
};

export default Hero;
