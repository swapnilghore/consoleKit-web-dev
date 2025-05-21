import React from 'react';
import logo from '../assets/main_logo.png';
import { FaShoppingCart, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm p-0">
      <div className="container-fluid d-flex align-items-center px-5">

        <a href="#" className="navbar-brand d-flex align-items-center p-0">
          <img src={logo} alt="Logo" className='p-0' width={150} />
        </a>

        <ul className="navbar-nav mx-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Rent</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cafe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <FaRegUser className="text-dark" onClick={() => window.location.href = '/login'} />
          <FaShoppingCart className="text-dark" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
