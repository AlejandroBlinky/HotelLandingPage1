import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './img/homepagebackground.jpg';
import Navbar from "./navbar";
import './style.css';
import room1 from './img/room1.jpg'
import room2 from './img/room2.jpg'
import room3 from './img/room3.jpg'

const Rooms = () => {
    const sectionStyle = {
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

   

    return (
        <div style={sectionStyle}>
            
            <Navbar />
            <div className=" d-flex">
                <ul className="row justify-content-center itemMargin p-0">
                    <li className=" card shadow col-3 m-5 p-0 border border-1 border-light-subtle" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <img src={room1} className="p-0 m-0 card-img" alt="roomimg1"></img>
                        <p className="p-2 card-body bg-transparent text-white fs-2 fw-normal shadowText text-center">Sapphire Sky Suite</p>
                        <p className="p-4 card-body bg-transparent text-white fs-2 fw-normal shadowText">Price:</p>
                    </li>
                    <li className=" card shadow col-3 m-5 p-0 border border-1 border-light-subtle" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <img src={room2} className="p-0 m-0 card-img" alt="roomimg2"></img>
                        <p className="p-2 card-body bg-transparent text-white fs-2 fw-normal shadowText text-center">Emerald Garden Retreat </p>
                        <p className="p-4 card-body bg-transparent text-white fs-2 fw-normal shadowText">Price:</p>
                    </li>
                    <li className=" card shadow col-3 m-5 p-0 border border-1 border-light-subtle" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <img src={room3} className="p-0 m-0 card-img" alt="roomimg3"></img>
                        <p className="p-2 card-body bg-transparent text-white fs-2 fw-normal shadowText text-center">Diamond Horizon Villa </p>
                        <p className="p-4 card-body bg-transparent text-white fs-2 fw-normal shadowText">Price:</p>
                    </li>
                    
                    
                </ul>
               
            </div>
        </div>
    );
};





export default Rooms;