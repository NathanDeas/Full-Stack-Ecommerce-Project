import React from "react";
import "../css/product-card.css"
function ProductCard({product}) {

    function stockMessage(stock) {
        if (stock === 0) return "Out Of Stock"
        if (stock < 5) return "Low Stock"
        return "In Stock"
    }

    return (
        <>
        <div className="product-container">
            <div className="product-info">
                <img src="https://placehold.co/250X150" alt="placeholder"/>
                <h1>{product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h1>
                <h2>{product.name} </h2>
                <p>{stockMessage(product.stock)}</p>
            </div>
            <button>Add to Cart</button>
        </div>

        </>

    )
}

export default ProductCard;