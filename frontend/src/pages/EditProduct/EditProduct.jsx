import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import { FaSave } from "react-icons/fa";

import "./EditProduct.css";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    supplier: "",
    price: "",
    quantity: "",
    status: "",
  });

  // Get Product By ID

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await API.get(`/products/${id}`);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,

      [e.target.name]: e.target.value,
    });
  };

  // Update Product

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/products/${id}`, product);

      alert("Product Updated Successfully");

      navigate("/products");
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="edit-product-container">
        <h1>Edit Product</h1>

        <form className="edit-product-form" onSubmit={updateProduct}>
          <label>Product Name</label>

          <input name="name" value={product.name} onChange={handleChange} />

          <label>Category</label>

          <input
            name="category"
            value={product.category}
            onChange={handleChange}
          />

          <label>Supplier</label>

          <input
            name="supplier"
            value={product.supplier}
            onChange={handleChange}
          />

          <label>Price</label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />

          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />

          <label>Status</label>

          <select name="status" value={product.status} onChange={handleChange}>
            <option>Available</option>

            <option>Low Stock</option>

            <option>Out Of Stock</option>
          </select>

          <button>
            <FaSave />
            Update Product
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default EditProduct;
