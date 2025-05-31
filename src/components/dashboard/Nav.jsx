import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signOut } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";

const Nav = ({ user }) => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const onLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                toast.success('Logged out successfully');
                navigate('/login');
            })
            .catch((error) => {
                toast.error("Logout error:", error);
            });
        localStorage.removeItem('user');
        localStorage.removeItem('google_access_token');
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-0">
            <Link className="navbar-brand fw-bold" to="/dashboard">
                Console<span className="text-primary">Kit</span>
            </Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto ms-4 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rentals">Rentals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Shop</Link>
                    </li>to
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Café</Link>
                    </li>
                </ul>

                {/* <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            {user?.photoURL ? (
              <img src={user.photoURL} className="rounded-circle me-2" width="32" height="32" />
            ) : (
              <IoPersonCircleOutline className="rounded-circle me-2 text-white" size={32} />
            )}
            <span className="text-white">{user ? user.name : 'Loading...'}</span>
          </div>
        </div> */}

                <div
                    className="profile-wrapper position-relative d-flex align-items-center"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="d-flex align-items-center">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                className="rounded-circle me-2"
                                width="32"
                                height="32"
                                alt="User"
                            />
                        ) : (
                            <IoPersonCircleOutline
                                className="rounded-circle me-2 text-white"
                                size={32}
                            />
                        )}
                        <span className="text-white">{user ? user.name : 'Loading...'}</span>
                    </div>

                    {showDropdown && (
                        <div
                            className="dropdown-menu show position-absolute logout-dropdown"
                        >
                            <div className="dropdown-item" onClick={onLogout} style={{ cursor: 'pointer' }}>
                                Logout
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
