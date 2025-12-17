import React, {useState} from "react";
import ProductFormSubmit from "../components/ProductForm";
import SearchForProduct from "../components/SearchForProduct"
import "../css/AdminEditPage.css"



function EditProducts() {
    const [searchId, setSearchId] = useState(null)
    return (
        <div id="admin-console-container">
            <h1>AddProduct</h1>
            <ProductFormSubmit />
            <h1>Search By Id And Display Card</h1>
            <input onChange={(e) => setSearchId(e.target.value)} type="number" value={searchId} min="0"/>
            {searchId && <SearchForProduct id={searchId} />}
        </div>
    );
}

export default EditProducts;