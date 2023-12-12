import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath, FaBed } from "react-icons/fa";
const Search = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    offer: false,
    furnished: false,
    sort: "created_at",
    order: "desc",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const offerFromUrl = urlParams.get("offer");
    const furnishedFromUrl = urlParams.get("furnished");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      offerFromUrl ||
      furnishedFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setFormData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListing = async () => {
      const searchQuery = urlParams.toString();
      const res = await axios.get(`/api/listing/listings?${searchQuery}`);
      const data = res.data;
      console.log(data.length);
      if (data.length > 8) {
        setShowMore(true);
      }
      setListings(data);
    };

    fetchListing();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setFormData({ ...formData, type: e.target.id });
    }
    if (e.target.id === "searchTerm") {
      setFormData({ ...formData, searchTerm: e.target.value });
    }
    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }
    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setFormData({
        ...formData,
        sort,
        order,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", formData.searchTerm);
    urlParams.set("type", formData.type);
    urlParams.set("parking", formData.parking);
    urlParams.set("offer", formData.offer);
    urlParams.set("furnished", formData.furnished);
    urlParams.set("sort", formData.sort);
    urlParams.set("order", formData.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async (e) => {
    e.preventDefault();
    const nOfListings = listings.length;
    const startIndex = nOfListings;
    const urlParams = new URLSearchParams();
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await axios.get(`/api/listing/listings?${searchQuery}`);
    const data = res.data;
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };
  return (
    <div className=" flex max-md:flex-col max-w-7xl m-auto ">
      <div className="border-r-2  pt-16 max-md:border-b-2 w-[48%] max-md:w-full max-md:flex max-md:justify-around ">
        <form
          onSubmit={handleSubmit}
          className="py-7 px-4 flex flex-col gap-7 max-md:pt-8 "
        >
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold whitespace-nowrap">Search : </label>
            <input
              type="text"
              placeholder="search"
              className="rounded-md p-1 max-md:w-full"
              id="searchTerm"
              value={formData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <label className="font-semibold">Type : </label>
            <input
              type="checkbox"
              id="all"
              onChange={handleChange}
              checked={formData.type === "all"}
            />
            <span>Rent & Sale</span>
            <input
              type="checkbox"
              id="rent"
              onChange={handleChange}
              checked={formData.type === "rent"}
            />
            <span>Rent</span>
            <input
              type="checkbox"
              id="sale"
              onChange={handleChange}
              checked={formData.type === "sale"}
            />
            <span>Sale</span>
            <input
              type="checkbox"
              id="offer"
              onChange={handleChange}
              checked={formData.offer}
            />
            <span>offer</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <label className="font-semibold">Amenities : </label>
            <input
              type="checkbox"
              id="parking"
              onChange={handleChange}
              checked={formData.parking}
            />
            <span>parking</span>
            <input
              type="checkbox"
              id="furnished"
              onChange={handleChange}
              checked={formData.furnished}
            />
            <span>Furnished</span>
          </div>
          <div>
            <label className="font-semibold">Sort : </label>
            <select
              name="categories"
              id="sort_order"
              className="rounded-md bg-gray-300"
              onChange={handleChange}
              defaultValue={"created_at_desc"}
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="bg-blue-950 text-white font-semibold rounded-md p-2">
            Search
          </button>
        </form>
      </div>
      <div className="pt-16 max-md:p-2 w-full p-3 md:h-fit border-l">
        <h1 className="font-semibold text-2xl text-slate-800 p-7 text-center">
          Listing result :
        </h1>
        {listings && (
          <div className="flex gap-6 flex-wrap ">
            {listings.map((listing) => {
              return (
                <div
                  key={listing._id}
                  className="w-full sm:w-[320px] max-sm:h-fit max-sm:pb-2 sm:h-[400px] bg-[#ffff] rounded-md shadow-sm hover:shadow-md shadow-neutral-300"
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
                      <div className="font-bold text-black text-sm flex gap-2 items-center">
                        <FaBed className="text-green-700" />
                        {listing?.bedrooms}{" "}
                        {listing?.bedrooms > 1 ? "Beds" : "bed"}
                      </div>
                      <div className="font-bold text-black text-sm flex gap-2 items-center">
                        <FaBath className="text-red-900" />
                        {listing?.bathrooms}{" "}
                        {listing?.bathrooms > 1 ? "Baths" : "Bath"}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="font-bold text-gray-600 text-lg ">
                        {listing?.regularPrice - listing?.discountPrice}$ /Month
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {showMore && (
          <button
            onClick={handleShowMore}
            className="text-green-600 text-center max-sm:w-full p-3 w-[80%] hover:underline"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
