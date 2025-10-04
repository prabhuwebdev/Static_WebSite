import React, { useState, useEffect } from 'react';
import styles from './OurValues.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const values = [
  {
    title: 'INTEGRITY',
    content: 'We uphold honesty and transparency in every decision and interaction.',
    heading: 'We lead with integrity.',
  },
  {
    title: 'EXCELLENCE',
    content: 'We strive for the highest standards in everything we build and deliver.',
    heading: 'We pursue excellence.',
  },
  {
    title: 'INNOVATION',
    content:
      'We think differently. We embrace new ideas, technologies, and construction techniques to provide cutting-edge solutions.',
    heading: 'We think differently.',
  },
  {
    title: 'CUSTOMER FOCUS',
    content: 'We listen, adapt, and deliver solutions that truly serve our clients’ needs.',
    heading: 'We put customers first.',
  },
  {
    title: 'SUSTAINABILITY',
    content:
      'We use eco-friendly practices to ensure long-lasting and responsible construction.',
    heading: 'We build for tomorrow.',
  },
];

const OurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.topLine} />
      <h2 className={styles.sectionTitle}>OUR VALUES</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          {values.map((item, index) => (
            <div
              key={index}
              className={`${styles.title} ${
                index === activeIndex ? styles.active : styles.inactive
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <h3 className={styles.heading}>{values[activeIndex].heading}</h3>
              <p className={styles.paragraph}>{values[activeIndex].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
