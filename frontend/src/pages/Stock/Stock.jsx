import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import "./Stock.css";

function Stock() {
  const [stocks, setStocks] = useState([]);

  // GET ALL STOCK

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    try {
      const response = await API.get("/stocks");

      setStocks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE STOCK

  const deleteStock = async (id) => {
    try {
      await API.delete(`/stocks/${id}`);

      alert("Stock Deleted");

      getStocks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="stock-container">
        <div className="stock-header">
          <div>
            <h1>Stock Management</h1>

            <p>Manage your inventory stock</p>
          </div>

          <Link to="/stock/add">
            <button className="add-stock-btn">
              <FaPlus />
              Add Stock
            </button>
          </Link>
        </div>

        <div className="stock-card">
          <table>
            <thead>
              <tr>
                <th>ID</th>

                <th>Product Name</th>

                <th>Category</th>

                <th>Quantity</th>

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.id}</td>

                  <td>{stock.productName}</td>

                  <td>{stock.category}</td>

                  <td>{stock.quantity}</td>

                  <td>
                    <span
                      className={
                        stock.status === "Available"
                          ? "available"
                          : stock.status === "Low Stock"
                            ? "low"
                            : "out"
                      }
                    >
                      {stock.status}
                    </span>
                  </td>

                  <td>
                    <Link to={`/stock/edit/${stock.id}`}>
                      <button className="stock-edit-btn">
                        <FaEdit />
                      </button>
                    </Link>

                    <button
                      className="stock-delete-btn"
                      onClick={() => deleteStock(stock.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stock;
