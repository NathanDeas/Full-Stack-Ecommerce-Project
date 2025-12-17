// Import React and hooks
import React, { useEffect, useState } from "react";

import { getProducts } from "../api/ProductsApi";
import ProductList from "../components/ProductList";
import "../css/product-page.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);
  
  return (
    <div className="products-page-container">
      <ProductList products={products}/>
    </div>
  );
}

export default ProductsPage;