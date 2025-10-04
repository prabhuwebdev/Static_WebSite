import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container px-3 py-3" >
        <a className={`navbar-brand ${styles.logo}  `} href="#">MyCompany</a>

        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.icon}`}></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav" style={{gap:"25px"}}>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



