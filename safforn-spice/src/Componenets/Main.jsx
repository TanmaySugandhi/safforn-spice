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
    </>
  );
}

export default Main;
