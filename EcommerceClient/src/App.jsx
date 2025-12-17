import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from "./products/pages/ProductsPage.jsx"
import AdminEdit from "./products/pages/AdminEditPage.jsx"
import Header from "./Header/components/header.jsx"
import "./app.css"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/adminedit" element={<AdminEdit />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
