import React from 'react';
import styles from './Aboutus.module.css';
import bgImage from '../../assets/projectimages/Software_Teams.jpg'; // Replace with your actual image path
import OurStory from './OurStory';
import OurVision from './OurVision';
import MissionValues from './OurMission';
import OurMission from './OurMission';
import OurValues from './OurValues';
import OurTeam from './OurTeam';
import GetInTouch from '../Home/GetInTouch';

const Hero = () => {
  return (
    <>
    <section className={styles.wrapper}>
      <img src={bgImage} alt="About Us Background" className={styles.bgImage} />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.paragraph}>
            We’re a team of passionate designers and developers who believe in crafting digital experiences that matter.
            Our mission is to turn ideas into intuitive, engaging websites that connect with users.
            From concept to code, we focus on clarity, creativity, and conversion.
            Let’s build something remarkable together.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;


