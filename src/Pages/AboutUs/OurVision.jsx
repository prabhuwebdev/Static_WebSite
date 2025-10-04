import React from 'react';
import styles from './OurVision.module.css';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const visionData = [
  {
    icon: <FaRocket />,
    title: 'Progress',
    description: 'We believe in client success and long-term business relationships.',
  },
  {
    icon: <FaUsers />,
    title: 'User Experience',
    description: 'We build solutions for startups and enterprises with best-in-class mobile apps.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Inventiveness',
    description: 'We stay ahead with futuristic solutions and custom app development.',
  },
  {
    icon: <FaHandshake />,
    title: 'Ethic and Credo',
    description: 'We maintain business relationships with integrity and ethical values.',
  },
];

const OurVision = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Our Vision</h2>
      <p className={styles.intro}>
        Our visions deserve to be seen. Our vision is to put your vision out there in the digital spectrum. While partnering with TechGropse, a leading software development company in Dubai—
      </p>

      <div className={styles.carouselWrapper}>
        <motion.div
          className={styles.track}
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        >
          {[...visionData, ...visionData].map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
