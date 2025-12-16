import React from "react";
// import ProductsPage from "./products/pages/ProductsPage.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from "./products/pages/ProductsPage.jsx"
import Header from "./Header/components/header.jsx"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
