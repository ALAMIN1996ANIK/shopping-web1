import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <nav>
            <a href="/Shop">Shop</a>
           <a href="/Review">Order Review</a>
           <a href="/Manage">Manage</a>
           <a href="/About Us">About Us</a>
           <a href="/Help Center">Help Center</a>
           </nav>
        </div>
    );
};

export default header;