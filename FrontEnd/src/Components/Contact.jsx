import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  console.log(landlord)

  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("loaded");
    const fetchUser = async () => {
      const res = await axios.get(`/api/user/${listing.userRef}`);
      const data = res.data;
      setLandlord(data);
    };
    fetchUser();
  }, [listing.userRef]);

  return (
    <div  className="flex flex-col gap-3">
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
  );
};

export default Contact;
