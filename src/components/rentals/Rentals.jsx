import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Profile from "./Profile.jsx";
// import History from "./History";
// import Wishlist from "./Wishlist";

const Rentals = () => {
 return (
    <div className='d-flex'>
      <Sidebar />
      <div className='flex-fill bg-light p-3 '>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="history" element={<History />} />
          <Route path="wishlist" element={<Wishlist />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default Rentals
