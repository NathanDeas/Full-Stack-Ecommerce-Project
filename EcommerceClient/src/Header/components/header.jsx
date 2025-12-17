import React from "react";
import "../css/header.css"
import { NavLink } from "react-router-dom";
import "../css/header.css"


function Header() {
    return (
        <>
        <div className="header-container">
            <h1>Ecommerce</h1>
            <nav>
                <NavLink to="/"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> 
                    Home 
                </NavLink>

                <NavLink to="/adminedit"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Edit Products
                </NavLink>
                <NavLink to="/adminedit"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Edit Products
                </NavLink>
                <NavLink to="/adminedit"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Cart
                </NavLink>
                <NavLink to="/adminedit"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    Sign-In
                </NavLink>
            </nav>
        </div>
        </>
    );
}
export default Header;