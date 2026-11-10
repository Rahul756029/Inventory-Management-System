import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import {
    FaSave
} from "react-icons/fa";

import "./EditCategory.css";


function EditCategory(){


const {id} = useParams();

const navigate = useNavigate();



const [category,setCategory] = useState({

name:"",
products:0

});





// Get Existing Category

useEffect(()=>{


fetchCategory();


},[]);




const fetchCategory = async()=>{


try{


const response = await API.get(`/categories/${id}`);


setCategory(response.data);


}

catch(error){

console.log(error);

}


};





const handleChange=(e)=>{


setCategory({

...category,

[e.target.name]:e.target.value

});


};






const updateCategory=async(e)=>{


e.preventDefault();


try{


await API.put(`/categories/${id}`,category);


alert("Category Updated Successfully");


navigate("/categories");


}


catch(error){


console.log(error);


}


};






return(

<div>


<Sidebar/>


<Navbar/>



<div className="edit-category-container">


<h1>
Edit Category
</h1>




<form

className="edit-category-form"

onSubmit={updateCategory}

>


<label>
Category Name
</label>


<input

name="name"

value={category.name}

onChange={handleChange}

/>





<label>
Total Products
</label>


<input

type="number"

name="products"

value={category.products}

onChange={handleChange}

/>





<button>

<FaSave/>

Update Category

</button>



</form>


</div>



<Footer/>


</div>

)


}


export default EditCategory;