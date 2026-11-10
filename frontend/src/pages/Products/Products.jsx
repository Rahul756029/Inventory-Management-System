import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import SearchBar from "../../components/SearchBar/SearchBar";

import API from "../../services/api";

import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // Fetch Products From Backend

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");

      setProducts(response.data);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching products", error);

      setLoading(false);
    }
  };

  // Delete Product

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);

      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log("Delete Error", error);
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="products-container">
        <div className="product-header">
          <div>
            <h1>Products</h1>

            <p>Manage your inventory products</p>
          </div>

          <Link to="/products/add">
            <button className="add-btn">
              <FaPlus />
              Add Product
            </button>
          </Link>
        </div>

        <SearchBar />

        <div className="table-card">
          {loading ? (
            <h3>Loading Products...</h3>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>

                  <th>Product</th>

                  <th>Category</th>

                  <th>Supplier</th>

                  <th>Price</th>

                  <th>Quantity</th>

                  <th>Status</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>{product.supplier}</td>

                    <td>₹{product.price}</td>

                    <td>{product.quantity}</td>

                    <td>
                      <span
                        className={
                          product.status === "Available"
                            ? "available"
                            : product.status === "Low Stock"
                              ? "low"
                              : "out"
                        }
                      >
                        {product.status}
                      </span>
                    </td>

                    <td>
                      <Link to={`/products/edit/${product.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
