import React from 'react';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/about'; 
import BookNow from './components/booknow';
import Rooms from './components/rooms';


const App = () => {
  return (
    <Router> 
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="rooms" element={<Rooms/>}/>
        <Route path="booknow" element={<BookNow/>}/>
        <Route path="about" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
};


export default App;