import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import API from "../../services/api";

import "./AddCategory.css";


function AddCategory(){


const navigate = useNavigate();


const [category,setCategory]=useState({

name:"",
products:0

});



const handleChange=(e)=>{

setCategory({

...category,

[e.target.name]:e.target.value

});

};



const saveCategory=async(e)=>{

e.preventDefault();


try{


await API.post("/categories",category);


alert("Category Added Successfully");


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


<div className="add-category-container">


<h1>Add Category</h1>


<form onSubmit={saveCategory}>


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

Save Category

</button>


</form>


</div>


<Footer/>

</div>


)

}


export default AddCategory;