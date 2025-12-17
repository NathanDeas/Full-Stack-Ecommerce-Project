import React from "react";
import ProductCard from "./ProductCard";
import "../css/product-list.css"


function ProductList({products}){
    return (
        <>
        <div className="list-container">
            <ul>
                {products.map(p =>(
                    <li key={p.id}>
                        <ProductCard product={p} />
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ProductList