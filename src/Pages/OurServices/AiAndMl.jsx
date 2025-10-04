import React, { useState } from 'react';
import styles from './AiAndMl.module.css';
import AiImage from '../../assets/AI_ML.jpg';
import MlImage from '../../assets/AI_ML.jpg';
import Ai1 from '../../assets/Ai1.jpg'
import Ai2 from '../../assets/Ai2.jpg'
import Ai3 from '../../assets/Ai3.jpg'
import Ml1 from '../../assets/Ml1.jpg'
import Ml2 from '../../assets/Ml2.jpg'
import Ml3 from '../../assets/Ml3.jpg'
import Ml4 from '../../assets/Ml4.jpg'


const aiTabData = [
  {
    label: 'Intelligent Automation',
    title: 'INTELLIGENT AUTOMATION',
    description:
      'AI enables systems to automate complex tasks with human-like decision-making. From chatbots to predictive analytics, we build solutions that think ahead.',
    image: AiImage,
  },
  {
    label: 'NaturalLanguage Processing',
    title: 'NATURAL LANGUAGE PROCESSING',
    description:
      'We craft AI models that understand and generate human language. Whether it’s sentiment analysis or smart assistants, NLP bridges the gap between humans and machines.',
    image: Ai1,
  },
  {
    label: 'Vision Intelligence',
    title: 'VISION INTELLIGENCE',
    description:
      'AI can see and interpret the world. We build computer vision systems that detect, classify, and react to visual data—from faces to defects.',
    image: Ai2,
  },
  {
    label: 'AI Strategy & Ethics',
    title: 'AI STRATEGY & ETHICS',
    description:
      'We help organizations adopt AI responsibly. From bias mitigation to ethical deployment, our frameworks ensure trust and transparency.',
    image: Ai3,
  },
];

const mlTabData = [
  {
    label: 'Predictive Modeling',
    title: 'PREDICTIVE MODELING',
    description:
      'ML algorithms learn from data to forecast outcomes. We build models that anticipate trends, behaviors, and risks with precision.',
    image: Ml4,
  },
  {
    label: 'Model Training & Tuning',
    title: 'MODEL TRAINING & TUNING',
    description:
      'We optimize ML models through rigorous training, hyperparameter tuning, and validation to ensure high performance and accuracy.',
    image: Ml1,
  },
  {
    label: 'Data Engineering',
    title: 'DATA ENGINEERING',
    description:
      'Clean, structured data is the backbone of ML. We design pipelines that transform raw data into actionable insights.',
    image: Ml2,
  },
  {
    label: 'Deployment & Monitoring',
    title: 'DEPLOYMENT & MONITORING',
    description:
      'We take models from lab to production. Our deployment workflows include real-time monitoring, drift detection, and continuous improvement.',
    image: Ml3,
  },
];

const Section = ({ heading, tabData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, image } = tabData[activeIndex];

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.mainHeading}>{heading}</h1>

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

const AiMlTabs = () => {
  return (
    <>
      <Section heading="Artificial Intelligence" tabData={aiTabData} />
      <Section heading="Machine Learning" tabData={mlTabData} />
    </>
  );
};

export default AiMlTabs;
