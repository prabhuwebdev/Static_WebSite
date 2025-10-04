import React, { useEffect, useState } from 'react';
import styles from './Navbar1.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className={`navbar-brand ${styles.logo}`} href="#">i-Tech</a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className={styles.closeIcon}>&times;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Center: Nav Items + Contact Button for mobile */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <div className={`d-flex flex-column flex-lg-row justify-content-center align-items-center ${styles.navGroup}`}>
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className={`nav-link ${styles.navItem}`} href="/" onClick={handleNavClick}>Home</a>
              </li>
              <li className="nav-item">
                <Link to="/services" className={`nav-link ${styles.navItem}`} onClick={handleNavClick}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${styles.navItem}`} onClick={handleNavClick}>AboutUs</Link>
              </li>
              <li className="nav-item d-lg-none mt-3">
                <Link to="/contact" className={`btn ${styles.demoBtn}`} onClick={handleNavClick}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Us Button for large devices only */}
        <div className={`d-none d-lg-flex align-items-center ${styles.demoSection}`}>
          <Link to="/contact" className={`btn ${styles.demoBtn}`}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
