import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import SearchBar from "../../components/SearchBar/SearchBar";

import API from "../../services/api";

import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import "./Suppliers.css";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  // GET ALL SUPPLIERS

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await API.get("/suppliers");

      setSuppliers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE SUPPLIER

  const deleteSupplier = async (id) => {
    try {
      await API.delete(`/suppliers/${id}`);

      setSuppliers(suppliers.filter((supplier) => supplier.id !== id));

      alert("Supplier Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="supplier-container">
        <div className="supplier-header">
          <div>
            <h1>Suppliers</h1>

            <p>Manage supplier information</p>
          </div>

          <Link to="/suppliers/add">
            <button className="add-supplier-btn">
              <FaPlus />
              Add Supplier
            </button>
          </Link>
        </div>

        <SearchBar />

        <div className="supplier-card">
          <table>
            <thead>
              <tr>
                <th>ID</th>

                <th>Name</th>

                <th>Company</th>

                <th>Email</th>

                <th>Phone</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.id}</td>

                  <td>{supplier.name}</td>

                  <td>{supplier.company}</td>

                  <td>{supplier.email}</td>

                  <td>{supplier.phone}</td>

                  <td>
                    <Link to={`/suppliers/edit/${supplier.id}`}>
                      <button className="supplier-edit-btn">
                        <FaEdit />
                      </button>
                    </Link>

                    <button
                      className="supplier-delete-btn"
                      onClick={() => deleteSupplier(supplier.id)}
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

export default Suppliers;
