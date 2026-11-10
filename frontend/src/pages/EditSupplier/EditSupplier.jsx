import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import { FaSave } from "react-icons/fa";

import "./EditSupplier.css";

function EditSupplier() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [supplier, setSupplier] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  // GET SUPPLIER DATA

  useEffect(() => {
    getSupplier();
  }, []);

  const getSupplier = async () => {
    try {
      const response = await API.get(`/suppliers/${id}`);

      setSupplier(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSupplier({
      ...supplier,

      [e.target.name]: e.target.value,
    });
  };

  // UPDATE SUPPLIER

  const updateSupplier = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/suppliers/${id}`, supplier);

      alert("Supplier Updated Successfully");

      navigate("/suppliers");
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    }
  };

  return (
    <div>
      <Sidebar />

      <Navbar />

      <div className="edit-supplier-container">
        <h1>Edit Supplier</h1>

        <form className="edit-supplier-form" onSubmit={updateSupplier}>
          <label>Supplier Name</label>

          <input
            type="text"
            name="name"
            value={supplier.name}
            onChange={handleChange}
          />

          <label>Company Name</label>

          <input
            type="text"
            name="company"
            value={supplier.company}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={supplier.email}
            onChange={handleChange}
          />

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={supplier.phone}
            onChange={handleChange}
          />

          <button>
            <FaSave />
            Update Supplier
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default EditSupplier;
