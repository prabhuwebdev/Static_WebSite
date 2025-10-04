import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container-fluid" style={{backgroundColor:"#121C27"}}>
        <div className='row py-5 d-flex justify-content-around align-items-center'>

            <div className='col-lg-2 col-md-6 col-sm-12 my-2 my-md-0 d-flex flex-column'>
                <h4 className={styles.heading}>i-Tech Solutions</h4>
                <p className={styles.text}>We are a leading IT company delivering innovative AI, web, and mobile app solutions to empower businesses worldwide.</p>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-12 my-2 my-md-0'>
                <h4 className={styles.heading}>Services</h4>
                <p className={styles.text}>Web Development</p>
                <p className={styles.text}>Mobile App Development</p>
                <p className={styles.text}>AI & Machine Learning Solutions</p>
                <p className={styles.text}>Cloud & IT Infrastructure</p>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-12 my-2 my-md-0'>
                <h4 className={styles.heading}>Quick Links</h4>
                <p className={styles.link}><Link to='/' className={styles.link}>Home</Link></p>
                <p className={styles.link}><Link to="/services" className={styles.link}>Services</Link></p>
                <p className={styles.link}><Link to="/about" className={styles.link}>About Us</Link></p>
                <p className={styles.link}><Link to="/contact" className={styles.link}>Contact Us</Link></p>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-12 my-2 my-md-0'>
                <h4 className={styles.heading}>Company</h4>
                <p className={styles.text}>About Us</p>
                <p className={styles.text}>Our Story</p>
                <p className={styles.text}>Careers</p>
                <p className={styles.text}>Events</p>
                <p className={styles.text}>Service Status</p>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 mb-4 my-2 my-md-0 text-center d-flex flex-column justfity-content-between">
                <div className='mb-4'>
                    <h4 className={styles.heading}>Follow Us On</h4>
                <div className={styles.socialIcons}>
                    <a href='#'><FaSquareFacebook size={30} style={{ color: "white" }} /></a>
                    <a href='#'><FaTwitter size={30} style={{ color: "white" }} /></a>
                    <a href='#'><FaInstagram size={30} style={{ color: "white" }} /></a>
                    <a href='#'><FaYoutube size={30} style={{ color: "white" }} /></a>
                </div>
                </div>
                <div>
                    <h4 className={styles.heading}>Contact Us</h4>
                <div>
                    <h6 className={styles.text}>+91 8364726182</h6>
                    <h6 className={styles.text} ><a href='#' className={styles.link}>xyzsolutions.in</a></h6>
                </div>
                </div>
                
            </div>

        </div>
    </footer>
  );
}

export default Footer;
