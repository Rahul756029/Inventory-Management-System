import {FaSearch} from "react-icons/fa";

import "./SearchBar.css";


function SearchBar(){


return(

<div className="search-box">


<FaSearch/>


<input

type="text"

placeholder="Search product..."



/>



</div>

)


}


export default SearchBar;