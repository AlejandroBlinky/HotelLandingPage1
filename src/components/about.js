import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './img/homepagebackground.jpg';
import Navbar from "./navbar";
import './style.css'
import facelogo from './img/facebooklogo.png'
import instalogo from './img/instagramlogo.png'
import twitterlogo from './img/twitterlogo.png'

const AboutUs = () => {
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
                <p className="text-white aboutusP ">Welcome to [Hotel Name], where luxury meets comfort and every stay is a memorable experience.

At [Hotel Name], we pride ourselves on providing exceptional hospitality and personalized service to each and every guest. Situated in the heart of [Location], our hotel offers a perfect blend of modern amenities and classic elegance, making it the ideal choice for both business and leisure travelers.

Our team of dedicated staff is committed to ensuring that your stay with us is nothing short of perfect. From the moment you step through our doors, you'll be greeted with warm smiles and attentive service, ensuring that you feel right at home.

Each of our [number of rooms] stylishly appointed guest rooms and suites is designed with your comfort in mind, featuring plush bedding, contemporary furnishings, and all the amenities you need for a relaxing stay. Whether you're traveling solo, with family, or for a romantic getaway, we have the perfect accommodation to suit your needs.

Indulge your taste buds at our [Hotel Name] restaurant, where our talented chefs create mouthwatering dishes using the freshest locally sourced ingredients. From hearty breakfasts to sumptuous dinners, our culinary offerings are sure to tantalize your senses and leave you craving for more.

Unwind and rejuvenate at our state-of-the-art fitness center or take a dip in our sparkling swimming pool. For those seeking ultimate relaxation, our spa offers a range of indulgent treatments and massages to help you unwind and recharge.</p>
            </div>
            <div className="row">
                <div className="aboutusLogos">
                 <a href="www.facebook.com" role="button" className=" col-6">
                    <img className="logosSize shadow"  src={facelogo} alt="facebooklogo"></img>
                 </a>
                 <a href="www.instagram.com" role="button" className=" col-6">
                    <img className="logosSize shadow"  src={instalogo} alt="instagram"></img>
                 </a>
                 <a href="www.twitter.com" role="button" className=" col-6">
                    <img  className="logosSize shadow" src={twitterlogo} alt="twitter"></img>
                 </a>
                </div>
            </div>
        </div>
    );
};



export default AboutUs;