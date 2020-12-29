import React from 'react';
import logo from '../../images/logo.jpg'
import "./Header.css"

const Header = () => {
    return (
        <div  className="header" >
           <img src={logo} alt=""/>
           <nav className = "navbar">
               <a href="/shop"> Shop</a>
               <a href="/review"> Order Review</a>
               <a href="/manage"> Manage</a>
           </nav>
        </div>
    );
};

export default Header;