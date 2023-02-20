import React from "react";
import logo from "../../img/logo.jpg";
import $ from "jquery";

const handleClick = () => {
  $(".nav").toggleClass("mobile-nav");
  $(".menu-toggle").toggleClass("is-active");
};
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="grad-bar"></div>
      <div className="navbar">
        <div className="header">
          <a href="/" className="main-icon"><img alt="logo" src={logo} className="nav-logo"></img></a>
          <h1>EasyGifts</h1>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav">
          <li className="nav-item nav-h">
            <a href="/">Home</a>
          </li>
          <li className="nav-item nav-a">
            <a href="/appointment">Ask Expert</a>
          </li>
          <li className="nav-item nav-m">
            <a href="/mymeds">MyOrders</a>
          </li>
          {/* <li className="nav-item nav-s">
            <a href="/snooze">Snooze</a>
          </li> */}
          <li className="nav-item nav-r">
            <a href="/auth">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
