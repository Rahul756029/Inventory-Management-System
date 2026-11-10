import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import {
    FaEdit,
    FaTrash,
    FaPlus
} from "react-icons/fa";

import "./Categories.css";

function Categories() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {

        try {

            const response = await API.get("/categories");

            setCategories(response.data);

            setLoading(false);

        } catch (error) {

            console.log(error);

            setLoading(false);

        }

    };

    const deleteCategory = async (id) => {

        try {

            await API.delete(`/categories/${id}`);

            setCategories(
                categories.filter((category) => category.id !== id)
            );

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <Sidebar />

            <Navbar />

            <div className="category-container">

                <div className="category-header">

                    <div>

                        <h1>
                            Categories
                        </h1>

                        <p>
                            Manage your product categories
                        </p>

                    </div>

                    <Link to="/categories/add">

                        <button className="add-category-btn">

                            <FaPlus />

                            Add Category

                        </button>

                    </Link>

                </div>

                <div className="category-card">

                    {

                        loading ?

                            <h3>Loading Categories...</h3>

                            :

                            <table>

                                <thead>

                                    <tr>

                                        <th>ID</th>

                                        <th>Category Name</th>

                                        <th>Total Products</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        categories.map((category) => (

                                            <tr key={category.id}>

                                                <td>
                                                    {category.id}
                                                </td>

                                                <td>
                                                    {category.name}
                                                </td>

                                                <td>
                                                    {category.products}
                                                </td>

                                                <td>

                                                    <Link to={`/categories/edit/${category.id}`}>

                                                        <button className="category-edit-btn">

                                                            <FaEdit />

                                                        </button>

                                                    </Link>

                                                    <button

                                                        className="category-delete-btn"

                                                        onClick={() => deleteCategory(category.id)}

                                                    >

                                                        <FaTrash />

                                                    </button>

                                                </td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                    }

                </div>

            </div>

            <Footer />

        </div>

    );

}

export default Categories;