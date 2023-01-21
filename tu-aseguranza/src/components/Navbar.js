import logo from "../img/logo.png";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function NavbarComponentdefault() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 110) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="main-nav-container">
        <div className="phone-container p__1-5">
          <p className="p-c__text">
            Phone:{" "}
            <a href="tel:1205-382-1301" className="purple">
              1(205)382-1301
            </a>
            | <span className="i__text">Se Habla Español</span>
          </p>
        </div>
        <div className="logo p__1-5">
          <img src={logo} alt="Logo" className="nav-image" />
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponentdefault;
