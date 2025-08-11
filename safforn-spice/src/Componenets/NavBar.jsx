import React from 'react';
import '../Styles/NavBar.css';

function NavBar() {
  return (
    <>
        <header>
        <div className="logo">
            <img src="/Pictures/logo.avif" alt="Restaurant Logo"></img>
            <h1>Saffron Spice</h1>
        </div>
        <nav>
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#chefs">Chefs</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    </>
  );
}

export default NavBar;
