import React from 'react';
import styles from './ServiceContent.module.css';
import { FaCode, FaRobot, FaBolt, FaHeadset, FaCloud } from 'react-icons/fa';
import WebDevelopment from '../../assets/web_development.jpg';
import AI from '../../assets/AI_ML.jpg';
import Customer from '../../assets/customer_support.jpg';
import CloudIoT from '../../assets/Cloud.jpg';

const ServiceContent = () => {
  return (
    <section className={styles.serviceSection}>
      <h2 className="text-center mb-5">Our Services</h2>

      <div className="container-fluid">
        <div className="container">

          {/* Web Development */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src={WebDevelopment} alt="Web Development" className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-6">
              <div className={styles.contentBox}>
                <FaCode className={styles.icon} />
                <h3 className={styles.title}>Web Development</h3>
                <p className={styles.text}>
                  We build scalable, responsive websites and applications using modern frameworks like React.
                  Our focus is on performance, accessibility, and pixel-perfect UI/UX that elevates your brand.
                </p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          </div>

          {/* AI & ML Development */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src={AI} alt="AI & ML Development" className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-6">
              <div className={styles.contentBox}>
                <FaRobot className={styles.icon} />
                <h3 className={styles.title}>AI & ML Development</h3>
                <p className={styles.text}>
                  From intelligent automation to predictive analytics, we develop AI/ML solutions that drive innovation.
                  Our models are tailored to your data, delivering insights and efficiency across industries.
                </p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          </div>

          {/* No Time Delay */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src="/images/no-delay.jpg" alt="No Time Delay" className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-6">
              <div className={styles.contentBox}>
                <FaBolt className={styles.icon} />
                <h3 className={styles.title}>No Time Delay</h3>
                <p className={styles.text}>
                  Our systems are optimized for real-time execution. Whether it's deployment or data processing,
                  you get instant results without waiting.
                </p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          </div>

          {/* Anytime Support */}
          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src={Customer} alt="Anytime Support" className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-6">
              <div className={styles.contentBox}>
                <FaHeadset className={styles.icon} />
                <h3 className={styles.title}>Anytime Support</h3>
                <p className={styles.text}>
                  Our team is available 24/7 to assist you. Whether it's troubleshooting or guidance,
                  we're here whenever you need us.
                </p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          </div>

          {/* Cloud & IoT Solutions */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src={CloudIoT} alt="Cloud & IoT Solutions" className={`img-fluid ${styles.image}`} />
            </div>
            <div className="col-md-6">
              <div className={styles.contentBox}>
                <FaCloud className={styles.icon} />
                <h3 className={styles.title}>Cloud & IoT Solutions</h3>
                <p className={styles.text}>
                  We deliver intelligent cloud and IoT systems that connect devices, streamline data, and unlock automation.
                  From edge computing to scalable cloud infrastructure, our solutions empower businesses to operate smarter,
                  faster, and more securely.
                </p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
