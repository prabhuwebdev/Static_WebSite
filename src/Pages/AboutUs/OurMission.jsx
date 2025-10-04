import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <section className={styles.wrapper}>
      <h6 className={styles.subheading}>OUR MISSION</h6>
      <h2 className={styles.heading}>
        Driven by <span className={styles.highlight}>Purpose</span>
      </h2>
      <p className={styles.paragraph}>
        At iTech, our mission is to empower businesses through intelligent, scalable, and user-centric digital solutions.  
        We believe in solving real-world problems with precision, creativity, and cutting-edge technology.  
        Our team is committed to delivering software that not only meets expectations but redefines them.  
        From startups to enterprises, we partner with clients to build platforms that drive growth, efficiency, and innovation.  
        Every line of code we write is a step toward shaping a smarter, more connected future.
      </p>
    </section>
  );
};

export default OurMission;
