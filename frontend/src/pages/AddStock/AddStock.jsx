import { useState } from "react";
import { useNavigate } from "react-router-dom";


import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


import API from "../../services/api";


import {
    FaSave
} from "react-icons/fa";


import "./AddStock.css";



function AddStock() {


    const navigate = useNavigate();




    const [stock, setStock] = useState({

        productName: "",
        category: "",
        quantity: "",
        status: "Available"

    });







    const handleChange = (e) => {


        setStock({

            ...stock,

            [e.target.name]: e.target.value

        });


    };







    const saveStock = async (e) => {


        e.preventDefault();



        try {


            await API.post("/stocks", stock);



            alert("Stock Added Successfully");



            navigate("/stock");



        }

        catch (error) {


            console.log(error);


            alert("Failed to Add Stock");


        }



    };







    return (

        <div>


            <Sidebar />

            <Navbar />




            <div className="add-stock-container">



                <h1>
                    Add Stock
                </h1>




                <form

                    className="add-stock-form"

                    onSubmit={saveStock}

                >



                    <label>
                        Product Name
                    </label>


                    <input

                        type="text"

                        name="productName"

                        value={stock.productName}

                        onChange={handleChange}

                        placeholder="Enter product name"

                    />







                    <label>
                        Category
                    </label>


                    <input

                        type="text"

                        name="category"

                        value={stock.category}

                        onChange={handleChange}

                        placeholder="Enter category"

                    />








                    <label>
                        Quantity
                    </label>


                    <input

                        type="number"

                        name="quantity"

                        value={stock.quantity}

                        onChange={handleChange}

                        placeholder="Enter quantity"

                    />








                    <label>
                        Status
                    </label>



                    <select

                        name="status"

                        value={stock.status}

                        onChange={handleChange}

                    >


                        <option>
                            Available
                        </option>


                        <option>
                            Low Stock
                        </option>


                        <option>
                            Out Of Stock
                        </option>



                    </select>







                    <button type="submit">


                        <FaSave />

                        Save Stock


                    </button>





                </form>




            </div>



            <Footer />




        </div>


    )

}



export default AddStock;