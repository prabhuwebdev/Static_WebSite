import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SupportCards.module.css';
import SupportImage1 from '../../assets/customer_support.jpg';
import SupportImage2 from '../../assets/AccountManager.jpg';
import SupportImage3 from '../../assets/Scalable_Infrastructure.jpg';

const supportItems = [
  {
    title: '24/7 Technical Support',
    description:
      'Our team is available around the clock to resolve issues and keep your systems running smoothly.',
    image: SupportImage1,
  },
  {
    title: 'Dedicated Account Managers',
    description:
      'Get personalized guidance and strategic support from experts who understand your business.',
    image: SupportImage2,
  },
  {
    title: 'Scalable Infrastructure Help',
    description:
      'We assist in scaling your backend and cloud services to meet growing demand with zero downtime.',
    image: SupportImage3,
  },
];

const SupportCards = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-secondary fw-semibold">Support Services</h6>
        <h2 className="fw-bold">How We Help</h2>
      </div>

      <div className="row g-4">
        {supportItems.map((item, index) => (
          <motion.div
            className="col-md-4"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className={`${styles.card}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay}>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-dark fw-medium">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SupportCards;
