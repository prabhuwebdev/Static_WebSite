import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode, FaBrain, FaMoneyBillWave } from 'react-icons/fa';
import styles from './Servicecards.module.css'

const ServiceCards = () => {
  const services = [
    {
      title: 'Web Design & Development',
      icon: <FaLaptopCode size={40} className="text-primary mb-3" />,
      description:
        'We build visually stunning, responsive websites with intuitive user interfaces and clean, scalable code.',
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain size={40} className="text-danger mb-3" />,
      description:
        'Harness the power of intelligent automation and predictive analytics to transform your business with AI-driven solutions.',
    },
    {
      title: 'Cost-Effective Web Solutions',
      icon: <FaMoneyBillWave size={40} className="text-warning mb-3" />,
      description:
        'Smart, budget-friendly web development tailored to your goals—without compromising quality or performance.',
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-secondary fw-semibold">Our Services</h6>
        <h2 className="fw-bold">What We Offer</h2>
      </div>

      {/* Animated Cards */}
      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div
            className="col-md-4"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`${styles.card} position-relative`}>
              <div className={styles.content}>
                {service.icon}
                <h5 className="fw-bold">{service.title}</h5>
              </div>
              <div className={styles.overlay}>
                <p className="text-dark fw-medium">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
