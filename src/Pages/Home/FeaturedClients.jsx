import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeaturedClients.module.css';

const companies = [
  'Empiro',
  'Netwise',
  'Kellogg’s',
  'SiteHub',
  'Genentech',
  'Astrotech',
];

const FeaturedClients = () => {
  // Duplicate the array for seamless looping
  const loopedCompanies = [...companies, ...companies];

  return (
    <div className={`container-fluid py-5 ${styles.section}`}>
      <div className="text-center mb-4">
        <h6 className="text-uppercase text-secondary fw-semibold">Recognized by the Best</h6>
        <h2 className="fw-bold">Our Featured Clients</h2>
        <p className="text-muted">
          Here are some of the companies Herrington has empowered to forge ahead with confidence.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <motion.div
          className={styles.slider}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {loopedCompanies.map((name, index) => (
            <div key={index} className={styles.client}>
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedClients;
