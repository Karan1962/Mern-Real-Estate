import { FaLocationDot } from "react-icons/fa6";
import { FaBath, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const Listings = ({ listings, type, desc, query }) => {
  return (
    <>
      <div className="pt-16 px-3 max-w-6xl m-auto ">
        <div className="text-2xl text-gray-600 dark:text-[#e1e1e1] font-semibold">
          {type}
        </div>
        <Link
          to={`/search?${query}`}
          className="text-blue-900 text-sm hover:underline dark:text-[#5454a3]"
        >
          {desc}
        </Link>
        <div className="flex gap-8 flex-wrap pt-2 ">
          {listings.map((listing) => {
            return (
              <Link
                to={`/SpecificListing/${listing._id}`}
                key={listing._id}
                className=" dark:bg-[#131222] dark:text-[#d5d5d5] w-full sm:w-[320px] max-sm:h-fit max-sm:pb-2 sm:h-[400px] bg-[#ffff] rounded-md shadow-sm hover:shadow-md shadow-neutral-300 dark:shadow-[#1b1b1b] dark:hover:shadow-md dark:hover:shadow-[#201932]"
              >
                <div className="w-full h-[50%] flex overflow-hidden rounded-md rounded-b-none">
                  <img
                    src={listing.imageUrls[0]}
                    alt="onion"
                    className="w-full h-full bg-center object-cover align-middle rounded-md rounded-b-none hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="flex px-3 pt-5 flex-col">
                  <div className="font-bold text-lg truncate">
                    {listing?.name}
                  </div>
                  <div className="text-md font-bold py-2 truncate">
                    <FaLocationDot className="inline text-emerald-700 " />{" "}
                    {listing.address}
                  </div>
                  <div className="text-gray-500 text-sm font-semibold line-clamp-2 ">
                    {listing?.description}
                  </div>
                  <div className="flex gap-5 py-2">
                    <div className="font-bold text-black text-sm flex gap-2 items-center dark:text-[#356935]">
                      <FaBed className="text-green-700" />
                      {listing?.bedrooms}{" "}
                      {listing?.bedrooms > 1 ? "Beds" : "bed"}
                    </div>
                    <div className="font-bold text-black text-sm flex gap-2 items-center dark:text-[#622727]">
                      <FaBath className="text-red-900" />
                      {listing?.bathrooms}{" "}
                      {listing?.bathrooms > 1 ? "Baths" : "Bath"}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-bold text-gray-600 text-lg dark:text-[#d1d1d1]">
                      {listing?.regularPrice - listing?.discountPrice}$ /Month
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Listings;
