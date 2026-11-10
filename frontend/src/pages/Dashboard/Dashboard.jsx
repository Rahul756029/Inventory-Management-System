import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SalesChart from "../../components/Charts/SalesChart";

import StockChart from "../../components/Charts/StockChart";

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      {/* Sidebar */}

      <Sidebar />

      {/* Navbar */}

      <Navbar />

      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <p className="welcome-text">Welcome back Admin 👋</p>

        {/* Dashboard Cards */}

        <div className="dashboard-cards">
          <DashboardCard
            title="Total Products"
            value="250"
            icon={<FaBox />}
            color="#2563EB"
          />

          <DashboardCard
            title="Total Orders"
            value="120"
            icon={<FaShoppingCart />}
            color="#10B981"
          />

          <DashboardCard
            title="Total Suppliers"
            value="45"
            icon={<FaUsers />}
            color="#F59E0B"
          />

          <DashboardCard
            title="Low Stock"
            value="15"
            icon={<FaExclamationTriangle />}
            color="#EF4444"
          />
        </div>
        {/* Analytics */}

        <div className="analytics">
          <SalesChart />

          <StockChart />
        </div>

        {/* Recent Orders */}

        <div className="recent-box">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Product</th>

                <th>Quantity</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Laptop</td>

                <td>5</td>

                <td className="success">Completed</td>
              </tr>

              <tr>
                <td>Keyboard</td>

                <td>20</td>

                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Mouse</td>

                <td>10</td>

                <td className="danger">Low Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
