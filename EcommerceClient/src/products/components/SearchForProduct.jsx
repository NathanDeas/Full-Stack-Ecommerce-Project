import React, { useEffect, useState } from "react";
import { getProductById } from "../api/ProductsApi";
import ProductCard from "./ProductCard";




function SearchForProduct({id}) {
    const [product,setProduct] = useState(null)
      
    
    useEffect(() => {
        async function fetchData() {
            const data = await getProductById(id);
            if (!data) {
                return("Not Found")
            }
            else{
                setProduct(data);
            }
        } fetchData();
    }, [id]);

    if (!product) return <p>Loading...</p>;
    
    return (
        <>
        <ProductCard product={product} />
        </>
    )
}

export default SearchForProduct