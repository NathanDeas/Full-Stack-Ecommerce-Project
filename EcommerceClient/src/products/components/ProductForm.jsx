import React, {useState} from "react";
import { addProduct } from "../api/ProductsApi";
import "../css/product-form.css"


function ProductFormSubmit() {
    // Initial state for the product form
    const INITIAL_PRODUCT = {
        name: "",
        description: "",
        price: "",
        stock: ""
    }

    const[product, setProduct] = useState(INITIAL_PRODUCT);

    // Handle form submission
    // Sends product data to the API and resets the form
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product)
        const response = await addProduct(product)
        console.log(response)
        setProduct(INITIAL_PRODUCT)
    }   

    return (
        <>
        <form onSubmit={handleSubmit} className="post-form">
            <label htmlFor="name">Product Name</label>
            {/* Update product name in state */}
            <input onChange={(e) => setProduct({...product, name: e.target.value})} 
                value={product.name} 
                type="text" 
                name="name" 
                id="name" required/>

            <label htmlFor="price">Price(USD)</label>
            {/* Update product price in state */}
            {/* Ensure price is stored as a float */}
            <input onChange={(e) => setProduct({...product, price: parseFloat(e.target.value, 10)})} 
                value={product.price} 
                type="number" 
                min="0"
                step="0.01" // Price input with two decimal places
                name="price" 
                id="price" required/>

            <label htmlFor="description">Product Description</label>
            {/* Update product description in state */}
            <textarea onChange={(e) => setProduct({...product, description: e.target.value})} 
                value={product.description} 
                name="description" 
                id="description" required></textarea>

            <label htmlFor="stock">Current Stock</label>
            {/* Update product stock in state */}
            {/* Ensure stock is stored as an integer */}
            <input onChange={(e) => setProduct({...product, stock: parseInt(e.target.value, 10)})} 
                value={product.stock} 
                type="number" 
                name="stock" 
                id="stock" required/>

            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default ProductFormSubmit;