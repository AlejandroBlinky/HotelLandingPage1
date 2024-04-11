import React from "react";
import 'bootstrap';
import backgroundImage from './img/homepagebackground.jpg';
import Navbar from "./navbar";

const HomePage = () => {
    const sectionStyle = {
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
        zIndex: 1,
    };

    return (
        <div style={sectionStyle}>
            <div style={overlayStyle}></div>
            <Navbar />
            <div className="d-flex container-fluid">
                <p className="text-white homeP">Experience unparalleled luxury and comfort at [Hotel Name]. From exquisite accommodations to exceptional service, we're here to make your stay truly unforgettable. Welcome to your perfect getaway. </p>
            </div>
        </div>
    );
};

export default HomePage;
