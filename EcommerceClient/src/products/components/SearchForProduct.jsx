import React, { useEffect, useState } from "react";
import { getProductById } from "../api/ProductsApi";
import { deleteProductById } from "../api/ProductsApi";

import ProductCard from "./ProductCard";




function SearchForProduct({id}) {
    const [product,setProduct] = useState(null)
    const [notFound, setNotFound] = useState(false)
      
    
    useEffect(() => {
        async function fetchData() {
            setNotFound(false)
            setProduct(null)
            const data = await getProductById(id);
            if (!data) {
                setNotFound(true)
                return 
            }
            else{
                setProduct(data);
            }
        } fetchData();
    }, [id]);

    const handleDelete = async () =>
    {
        const status = await deleteProductById(id)
        console.log(status)
    }

    if (!notFound && !product) return <p>Loading...</p>;
    if (notFound) return <p>Product not found with id: {id}</p>;
    
    return (
        <>
        
            <ProductCard product={product} />
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default SearchForProduct