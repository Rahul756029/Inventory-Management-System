import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import { FaSave } from "react-icons/fa";

import "./EditStock.css";

function EditStock() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [stock, setStock] = useState({
    productName: "",
    category: "",
    quantity: "",
    status: "Available",
  });

  // GET STOCK BY ID

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    try {
      const response = await API.get(`/stocks/${id}`);

      setStock(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setStock({
      ...stock,

      [e.target.name]: e.target.value,
    });
  };

  // UPDATE STOCK

  const updateStock = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/stocks/${id}`, stock);

      alert("Stock Updated Successfully");

      navigate("/stock");
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="edit-stock-container">
        <h1>Edit Stock</h1>

        <form className="edit-stock-form" onSubmit={updateStock}>
          <label>Product Name</label>

          <input
            type="text"
            name="productName"
            value={stock.productName}
            onChange={handleChange}
          />

          <label>Category</label>

          <input
            type="text"
            name="category"
            value={stock.category}
            onChange={handleChange}
          />

          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            value={stock.quantity}
            onChange={handleChange}
          />

          <label>Status</label>

          <select name="status" value={stock.status} onChange={handleChange}>
            <option>Available</option>

            <option>Low Stock</option>

            <option>Out Of Stock</option>
          </select>

          <button type="submit">
            <FaSave />
            Update Stock
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default EditStock;
