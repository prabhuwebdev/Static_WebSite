import React from 'react';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <section className={styles.wrapper}>
      <h6 className={styles.subheading}>OUR STORY</h6>
      <h2 className={styles.heading}>
        Focused and <span className={styles.highlight}>Future Ready</span>
      </h2>
      <p className={styles.paragraph}>
        At iTech, our journey began with a simple vision – to create innovative digital solutions that empower businesses to grow in today’s fast-paced world. What started as a small team of passionate developers has grown into a company recognized for excellence in web development and cutting-edge AI & ML solutions. Over the years, we have partnered with clients across industries, helping them transform their ideas into scalable, intelligent, and user-friendly applications. Guided by innovation and driven by results, we continue to push boundaries, blending creativity with technology to shape the future of digital experiences. At iTech, we don’t just build solutions – we build success stories.
      </p>
    </section>
  );
};

export default OurStory;
