import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBox,
  FaTags,
  FaTruck,
  FaWarehouse,
  FaShoppingCart,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBoxes,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    alert("Logout Successfully");

    navigate("/login");
  };

  return (
    <div className="sidebar">
      {/* Brand Logo */}

      <div className="brand-section">
        <div className="brand-logo">
          <FaBoxes />
        </div>

        <div className="brand-text">
          <h2>InventoryPro</h2>

          <p>Smart Inventory Management</p>
        </div>
      </div>

      {/* Menu */}

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard">
            <FaHome />

            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/products">
            <FaBox />

            <span>Products</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories">
            <FaTags />

            <span>Categories</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/suppliers">
            <FaTruck />

            <span>Suppliers</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/stock">
            <FaWarehouse />

            <span>Stock</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <FaShoppingCart />

            <span>Orders</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports">
            <FaChartBar />

            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/users">
            <FaUsers />

            <span>Users</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog />

            <span>Settings</span>
          </NavLink>
        </li>
      </ul>

      {/* Logout */}

      <div className="logout-section">
        <button onClick={logout}>
          <FaSignOutAlt />

          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
