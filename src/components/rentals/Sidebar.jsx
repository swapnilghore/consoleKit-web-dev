import { Link, NavLink } from "react-router-dom";
import { IoMdHome, IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div class="bg-dark text-white vh-100 p-3" >
      <div className="mb-4">
      <Link to="/dashboard" className="me-5 fw-bold fs-2 text-white text-decoration-none">GameRent</Link>
      </div>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item align-items-center">
            <NavLink to="/rentals" className={({ isActive }) => `nav-link rounded text-white ${isActive ? 'bg-primary' : ''}`} end><IoMdHome className="fs-5 me-2 mb-1" />Dashboard</NavLink>
          </li>
          <li className="nav-item align-items-center">
            <NavLink to="/rentals/profile" className={({ isActive }) =>   `nav-link rounded text-white ${isActive ? 'bg-primary' : ''}` } end><IoPersonOutline className="fs-5 me-2 mb-1" />Profile</NavLink>
          </li>
          <li className="nav-item align-items-center">
            <NavLink to="/rentals/history" className={({ isActive }) =>   `nav-link rounded text-white ${isActive ? 'bg-primary' : ''}` } end><FaHistory className="fs-5 me-2 mb-1" />History</NavLink>
          </li>
          <li className="nav-item align-items-center">
            <NavLink to="/rentals/wishlist" className={({ isActive }) =>   `nav-link rounded text-white ${isActive ? 'bg-primary' : ''}` } end><IoIosHeartEmpty className="fs-5 me-2 mb-1" />Wishlist</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
