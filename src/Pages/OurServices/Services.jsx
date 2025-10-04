import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import ServiceImg from '../../assets/OurServices.jpg';
import ServiceContent from './ServiceContent';
import OurProjects from './OurProjects';
import StatsCards from './StatsCards';
import GetInTouch from '../Home/GetInTouch';
import WebDevTabs from './WebDevTabs';
import AiMlTabs from './AiAndMl';
import SupportCards from './SupportCards';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`container-fluid ${styles.heroSection}`}>
        <div className="row">
          <div className="col-12 position-relative p-0">
            <img
              src={ServiceImg}
              alt="Services Background"
              className={`img-fluid w-100 ${styles.bgImage}`}
            />
            <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.overlay}`}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <motion.h2
                      className={styles.heading}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                      What We Are Providing
                    </motion.h2>
                    <motion.p
                      className={styles.description}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                      We specialize in modern web development, crafting seamless UI/UX experiences that engage users.  
                      Our team delivers intelligent solutions powered by artificial intelligence and machine learning.  
                      From frontend finesse to backend scalability, we build systems that perform, adapt, and evolve.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <WebDevTabs/>
      <AiMlTabs/>
      <SupportCards/>
      <div className="container">
        <StatsCards />
      </div>
      <OurProjects/>
      <GetInTouch/>
      
      
    </>
  );
};

export default Services;
