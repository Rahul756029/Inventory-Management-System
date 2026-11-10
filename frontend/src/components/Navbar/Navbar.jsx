import { FaBell } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h3>InventoryPro Admin Panel</h3>
      </div>

      <div className="nav-right">
        <FaBell className="bell" />

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="profile" />

          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
