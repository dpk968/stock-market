import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import D2 from "../img/D2.png";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={require("../img/D2.png")} alt="Logo" />
        <div className="company-name">Deepak</div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-btn">Search</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
