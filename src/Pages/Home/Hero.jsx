import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundVideo from "../../assets/BackgroundVideo.mp4";

const Hero = () => {
  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 0 }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Animated Content */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ zIndex: 2 }}
      >
        <div className="px-3 w-100">
          <h1
            className="fw-medium text-white p-1"
            style={{
              fontSize: "2.25rem", // Slightly smaller for mobile friendliness
            }}
          >
            <span
              className="d-inline-block"
              style={{ position: "relative" }}
            >
              INNOVATION AND THE FUTURE OF TECHNOLOGY

              {/* Underline Animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  delay: 1.2,
                  duration: 2,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: 0,
                  height: "2px",
                  width: "100%",
                  backgroundColor: "white",
                  transformOrigin: "center",
                  borderRadius: "2px",
                }}
              />
            </span>
          </h1>

          <motion.p
            className="text-white mx-auto mt-3 fw-light"
            style={{
              maxWidth: "900px",
              fontSize: "1.1rem", // Slightly reduced for better mobile readability
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          >
            We deliver innovative IT solutions across web, mobile, and enterprise platforms. Our expertise in Artificial Intelligence (AI) and Machine Learning (ML) helps businesses automate processes, gain insights, and create smarter digital experiences.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
