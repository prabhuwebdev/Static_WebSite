
import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundImage from '../../assets/Contact_Us.jpg'
import ContactInfo from './ContactInfo'
import ContactLocation from "./ContactLocation";

const Hero = () => {
  return (
    <>
    <div style={{ height: "80vh", position: "relative", overflow: "hidden" }}>
      {/* Background Image */}
      <img
        src={BackgroundImage}
        alt="Rebar background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 0 }}
      />

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Animated Content aligned to right */}
      <div className="position-absolute top-0 end-0 h-100 w-100 d-flex justify-content-end align-items-center text-end" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white px-4 px-md-5"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-4">
            We practice Universal Design principles to help you build dream construction you can grow old with.
          </p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-end">
              <li className="breadcrumb-item">
                <a href="#" className="text-white-50 text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </motion.div>
      </div>
    </div>
    
    </>
    
  );
};

export default Hero;