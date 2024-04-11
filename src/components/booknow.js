import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './img/homepagebackground.jpg';
import Navbar from "./navbar";
import './style.css';

const BookNow = () => {
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
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0v),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
        zIndex: 1,
    };

   

    return (
        <div style={sectionStyle}>
            <div style={overlayStyle}></div>
            <Navbar />
            <div className="">
                <form className="bg-light-subtle formPlacement" >
                    <div className="form-group">
                        <label htmlFor="name" className="formPlace">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className=" formPlace">Lastname:</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Enter your lastname"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="formPlace">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber" className="formPlace">Phone Number:</label>
                        <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfPeople" className="formPlace">Number of People (1-4):</label>
                        <select className="form-control" id="numberOfPeople" name="numberOfPeople" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookNow;
