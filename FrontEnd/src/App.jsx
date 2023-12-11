import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, Login, Profile, Home, About } from "./Pages";
import { Navbar, PrivateProfile } from "./Components";
import {
  Cloud,
  Cottage,
  Luxury,
  TrankilLakeside,
} from "./Components/places/index";
import "./App.css";
import Listing from "./Pages/Listing";
import ListingUpdate from "./Components/ListingUpdate";
import SpecificListing from "./Pages/SpecificListing";
import Search from "./Components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/SpecificListing/:listingId"
          element={<SpecificListing />}
        />
        <Route element={<PrivateProfile />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Update-Listing/:id" element={<ListingUpdate />} />
        </Route>
        <Route path="/Search" element={<Search />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/Cottage" element={<Cottage />} />
        <Route path="/Luxury" element={<Luxury />} />
        <Route path="/trankil" element={<TrankilLakeside />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
