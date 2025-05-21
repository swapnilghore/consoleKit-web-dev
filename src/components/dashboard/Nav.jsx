import React from 'react';

const Nav = () => {
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
          {/* Notification Bell with Badge */}
          <div className="position-relative me-3">
            <i className="bi bi-bell-fill text-white fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </div>

          {/* Profile Image and Name */}
          <div className="d-flex align-items-center">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile"
              className="rounded-circle me-2"
              width="32"
              height="32"
            />
            <span className="text-white">Alex Chen</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
