import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import { FaSave } from "react-icons/fa";

import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    supplier: "",
    price: "",
    quantity: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,

      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", product);

      alert("Product Added Successfully");

      navigate("/products");
    } catch (error) {
      console.log(error);

      alert("Product Add Failed");
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="add-product-container">
        <h1>Add Product</h1>

        <form className="product-form" onSubmit={saveProduct}>
          <label>Product Name</label>

          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />

          <label>Category</label>

          <input
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter category"
          />

          <label>Supplier</label>

          <input
            name="supplier"
            value={product.supplier}
            onChange={handleChange}
            placeholder="Enter supplier"
          />

          <label>Price</label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
          />

          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
          />

          <label>Status</label>

          <select name="status" value={product.status} onChange={handleChange}>
            <option>Available</option>

            <option>Low Stock</option>

            <option>Out Of Stock</option>
          </select>

          <button>
            <FaSave />
            Save Product
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default AddProduct;
