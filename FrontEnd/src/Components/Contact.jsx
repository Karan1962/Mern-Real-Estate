import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  console.log(landlord);

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("loaded");
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/user/${listing.userRef}`);
        const data = res.data;
        setLandlord(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-3 pt-3">
          <p className="text-sm font-bold bg-contain bg-gray-200 rounded-md p-2 shadow-md ">
            Contact{" "}
            <span className="text-md  uppercase text-gray-500">
              {landlord.userName}
            </span>{" "}
            for <span className="uppercase text-gray-500">{listing.name} </span>
            by sending message!
          </p>
          <textarea
            name="message"
            id="message"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-md p-2 focus:outline-indigo-200"
          ></textarea>
          <Link
            to={`mailto:${landlord?.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="rounded-md text-center text-white bg-sky-950 p-3"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
