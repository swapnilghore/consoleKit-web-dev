import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

const Nav = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-0">
      <a className="navbar-brand fw-bold" href="#">
        Console<span className="text-primary">Kit</span>
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto ms-4 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Rentals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Café</a>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <img src={user ? user.photoURL : <IoPersonCircleOutline className="text-white"/>} alt="profile" className="rounded-circle me-2" width="32" height="32" />
            <span className="text-white">{user ? user.name: 'Loading...' }</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
