import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../App.css';

const Navbar = ({ }) => {
    return (<div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Sentimetal App</span>
            </div>
        </nav>
    </div>)
}

export default Navbar;