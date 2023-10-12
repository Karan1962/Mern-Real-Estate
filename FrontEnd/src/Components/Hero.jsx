import React from "react";

const Hero = () => {
  return (
    <div className="py-28 px-3 max-w-6xl m-auto flex flex-col">
      <div className="text-3xl sm:text-6xl font-bold text-slate-700 ">
        Find your next <span className="text-neutral-400">perfect</span> <br />
        place with ease
      </div>
      <div className="text-base text-gray-400 py-6 ">
        OnlyEstate will help you find your home fast, easy and comfortable.<br/>
        Our expert support are always available.
      </div>
      <div className="text-indigo-800  font-bold hover:underline cursor-pointer w-fit">
        Let's Start Now...
      </div>
    </div>
  );
};

export default Hero;
