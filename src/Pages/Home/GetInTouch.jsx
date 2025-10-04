import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GetInTouch.module.css";
import Image from "../../assets/GetInTouchImg.jpg";

const GetInTouch = () => {
  return (
    <div className={`container-fluid ${styles.heroSection}`} style={{overflow: "hidden" }}>
      <div className="row g-0 align-items-center">
        {/* Left: Image Panel with animation */}
        <motion.div
          className="col-md-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={Image}
            alt="Construction site"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover",borderRadius:"12px"}}
          />
        </motion.div>

        {/* Right: Content Panel with animation */}
        <motion.div
          className="col-md-6 d-flex justify-content-center align-items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.contentBox}>
            <h2 className="fw-bold text-white mb-3">300+ Projects Delivered</h2>
            <h4 className="text-white mb-4">
              From Blueprint to Build: We Supply, You Construct
            </h4>
            <p className="text-white-50 mb-4">
              Your trusted partner for premium construction materials. We empower builders with reliable supply chains, expert support, and cost-effective solutions.
            </p>
            <button className="btn btn-outline-light rounded-pill px-4">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
