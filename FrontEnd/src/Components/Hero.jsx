import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="w-screen dark:bg-[#1d1f2a] pb-10">
      <div className="pt-28 pb-6 px-3 max-w-6xl m-auto flex flex-col">
        <div className="text-3xl sm:text-6xl font-bold text-slate-700 dark:text-[#dcdcdc]">
          Find your next{" "}
          <span className="text-neutral-400 dark:text-[gray]">perfect</span>{" "}
          <br />
          place with ease
        </div>
        <div className="text-base text-gray-400 py-6 ">
          KaranEstate will help you find your home fast, easy and comfortable.
          <br />
          Our expert support are always available.
        </div>
        <Link to={"/search"}>
          <div className="text-indigo-800  font-bold hover:underline cursor-pointer w-fit dark:text-[#85bbfd]">
            Let&apos;s Start Now...
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
