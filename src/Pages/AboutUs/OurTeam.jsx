import React, { useState } from 'react';
import styles from './OurTeam.module.css';
import { motion } from 'framer-motion';

import Aarav from '../../assets/projectimages/Aarav_menon.jpg';
import Meera from '../../assets/projectimages/Meera_Iyer.jpg';
import Ravi from '../../assets/projectimages/Ravi_Kumar.jpg';
import Sneha from '../../assets/projectimages/sneha_reddy.jpg';
import Karthik from '../../assets/projectimages/KarthikRaj.jpg';

const leaders = [
  {
    name: 'Aarav Menon',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving innovation and strategic growth across all verticals.',
    image: Aarav,
  },
  {
    name: 'Meera Iyer',
    role: 'Chief Technology Officer',
    bio: 'Architect of scalable systems and AI-driven solutions with 15+ years in tech.',
    image: Meera,
  },
];

const team = [
  {
    name: 'Ravi Kumar',
    role: 'Frontend Engineer',
    bio: 'Crafts pixel-perfect interfaces with React, Framer Motion, and design precision.',
    image: Ravi,
  },
  {
    name: 'Sneha Reddy',
    role: 'UX Designer',
    bio: 'Designs intuitive user journeys with a focus on accessibility and delight.',
    image: Sneha,
  },
  {
    name: 'Karthik Raj',
    role: 'Backend Developer',
    bio: 'Builds secure, scalable APIs and microservices with Node.js and cloud infra.',
    image: Karthik,
  },
];

const Card = ({ person }) => {
  const [isTapped, setIsTapped] = useState(false);

  const toggleOverlay = () => {
    if (window.innerWidth <= 768) {
      setIsTapped((prev) => !prev);
    }
  };

  return (
    <motion.div
      className={styles.card}
      whileHover="hover"
      initial="rest"
      animate={isTapped ? 'hover' : 'rest'}
      onClick={toggleOverlay}
    >
      <div className={styles.imageWrapper}>
        <img src={person.image} alt={person.name} className={styles.image} />
        <motion.div
          className={styles.overlay}
          variants={{
            rest: { y: '100%' },
            hover: { y: '0%' },
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <motion.div
            className={styles.overlayContent}
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          >
            <h4>{person.name}</h4>
            <span>{person.role}</span>
            <p>{person.bio}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <section className={`container py-5 ${styles.wrapper}`}>
      <div className={styles.header}>
        <div className={styles.line} />
        <h2 className={styles.heading}>Our Leaders & Team</h2>
        <p className={styles.subtext}>
          Meet the minds behind the mission—visionaries, builders, and collaborators shaping the future.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.label}>Leaders</h3>
        <div className="d-flex justify-content-around flex-wrap gy-4">
          {leaders.map((person, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 mb-5">
              <Card person={person} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.label}>Team Members</h3>
        <div className="row gy-4">
          {team.map((person, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <Card person={person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
