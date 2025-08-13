import React from "react";
import "../Styles/Main.css";

function Main() {
  return (
    <>
      <section className="main-section">
        <div className="main-title">
          <div className="title">Experience the Essence of India</div>
          <div className="subtitle">
            "Indulge in authentic flavors crafted with passion and tradition"
          </div>
        </div>
        <div className="main-image">
          <img src="Pictures/main.jpg" alt="Restaurant Image"></img>
        </div>
      </section>
       <section id="about">
            <div className="section-title">About Us</div>
            <div className="content">
                <p>Welcome to <strong>Saffron Spice</strong>, where every meal is a celebration of India's rich culinary heritage. Nestled in the heart of the city, our restaurant offers a culinary journey that spans the length and breadth of India. From aromatic biryanis to succulent tandoori kebabs, each dish is crafted with the finest ingredients and time-honored recipes.</p>
                <p><a href="about.html" >Read More &gt;&gt;</a></p>
            </div>
        </section>
    </>
  );
}

export default Main;
