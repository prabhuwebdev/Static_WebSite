import React, { useState } from 'react';
import styles from './WebDevTabs.module.css';
import Image from '../../assets/web_development.jpg';
import Webdev2 from '../../assets/WebDev2.jpg'
import WebDev3 from '../../assets/WebDev3.jpg'
import WebDev4 from '../../assets/WebDev4.jpg'

const tabData = [
  {
    label: 'Flow That Converts',
    title: 'Flow That Converts',
    description:
      'Good design doesn’t just look good, it guides. We build intuitive flows that move users naturally through your experience, turning curiosity into action.',
    image: Image,
  },
  {
    label: 'Adaptive by Nature',
    title: 'Adaptive by Nature',
    description:
      'Our layouts respond to every screen size with elegance. Whether mobile or desktop, your users get a seamless experience.',
    image: Webdev2,
  },
  {
    label: 'Made to Convert',
    title: 'Made to Convert',
    description:
      'We optimize every pixel for performance. From CTA placement to load speed, conversion is baked into the build.',
    image: WebDev3,
  },
  {
    label: 'Experience-First Design',
    title: 'Experience-First Design',
    description:
      'Design is more than visuals—it’s how users feel. We craft interfaces that delight, engage, and retain.',
    image: WebDev4,
  },
];

const WebDevTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, image } = tabData[activeIndex];

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Web Development</h1>

      <nav className={`container ${styles.tabNav}`}>
        <div className="row w-100 justify-content-center">
          {tabData.map((tab, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-3">
              <button
                className={`${styles.tabBtn} ${activeIndex === index ? styles.active : ''} w-100`}
                onClick={() => setActiveIndex(index)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
      </nav>

      <div className={styles.contentBox}>
        <div className={styles.textArea}>
          <h2 className={styles.heading}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageArea}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default WebDevTabs;
