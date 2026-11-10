import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import {
    FaSave
} from "react-icons/fa";

import "./AddSupplier.css";


function AddSupplier(){


const navigate = useNavigate();



const [supplier,setSupplier] = useState({

    name:"",
    company:"",
    email:"",
    phone:""

});





const handleChange = (e)=>{


setSupplier({

    ...supplier,

    [e.target.name]:e.target.value

});


};






const saveSupplier = async(e)=>{


e.preventDefault();



try{


await API.post("/suppliers",supplier);



alert("Supplier Added Successfully");



navigate("/suppliers");



}

catch(error){


console.log(error);


alert("Something went wrong");


}



};







return(

<div>


<Sidebar/>

<Navbar/>



<div className="add-supplier-container">



<h1>
Add Supplier
</h1>




<form 
className="add-supplier-form"
onSubmit={saveSupplier}
>



<label>
Supplier Name
</label>


<input

type="text"

name="name"

value={supplier.name}

onChange={handleChange}

placeholder="Enter supplier name"

/>






<label>
Company Name
</label>


<input

type="text"

name="company"

value={supplier.company}

onChange={handleChange}

placeholder="Enter company name"

/>






<label>
Email
</label>


<input

type="email"

name="email"

value={supplier.email}

onChange={handleChange}

placeholder="Enter email"

/>






<label>
Phone
</label>


<input

type="text"

name="phone"

value={supplier.phone}

onChange={handleChange}

placeholder="Enter phone number"

/>






<button>


<FaSave/>

Save Supplier


</button>




</form>




</div>




<Footer/>


</div>


)

}



export default AddSupplier;