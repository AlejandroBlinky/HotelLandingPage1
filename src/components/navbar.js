import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './style.css'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-transparent p-3">
            <div className="container-fluid justify-content-between ">
                <Link to="/" className="navbar-brand brandText">Example Hotel</Link>
                <div>
                    <Link to='/rooms' className=" btn p-5 m-1 navbarItems">Our Rooms</Link>
                    <Link to='/booknow' className=" btn p-5 m-1 navbarItems">Book Now</Link>
                    <Link to='/about' className=" btn p-5 m-1 navbarItems">About Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
