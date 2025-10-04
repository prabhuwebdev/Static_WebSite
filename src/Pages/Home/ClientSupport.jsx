import React from 'react';
import { motion } from 'framer-motion';
import Client from '../../assets/excellentclientsupport.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientSupport = () => {
  const points = [
    'We provide excellent client support to ensure your experience is smooth and hassle-free.',
    'Our team is available 24/7 to assist you with any queries or issues.',
    'We are committed to delivering reliable services that meet your needs.',
    'Customer satisfaction is our top priority, always.',
  ];

  return (
    <>
      {/* Second Section - Client Support */}
      <motion.div
        className="container seconddiv mt-0"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="row g-4 align-items-stretch mt-4 mb-5">
          {/* Image Div */}
          <div className="col-md-6 d-flex">
            <img
              src={Client}
              className="img-fluid rounded"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt="client support"
            />
          </div>

          {/* Content Div */}
          <div className="col-md-6 d-flex flex-column justify-content-center bg-light p-4 rounded">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Excellent Client Support
            </motion.h1>

            <ul className="mt-3 text-muted">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.3,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClientSupport;
