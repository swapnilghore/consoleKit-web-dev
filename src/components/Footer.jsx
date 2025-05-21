import React from 'react';
import { FaInstagram , FaTwitter } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 small">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-2">ConsoleKit</h6>
            <p className="text-white-50 mb-2">Premium gaming experience </p>
            <p className="text-white-50 mb-2">provider since 2025</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 fs-5"><FaTwitter className="text-white-50 fs-5" /></a>
              <a href="#" className="text-white-50 fs-5"><FaInstagram className="text-white-50 fs-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none text-light d-block mb-1">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block mb-1">Rent Setup</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block mb-1">Shop</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block">Gaming Café</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-2">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none d-block mb-1">FAQ</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block mb-1">Contact Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block mb-1">Terms of Service</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none d-block">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-2">Newsletter</h6>
            <p className="text-white-50 mb-2">Subscribe for updates and offers</p>
            <form className="d-flex">
              <input type="email" className="form-control form-control-sm bg-secondary text-light border-0" placeholder="Your email"/>
              <button className="btn btn-primary btn-sm" type="submit"><GrSend /></button>
            </form>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <p className="text-center text-white-50 mb-0">&copy; 2025 ConsoleKit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

