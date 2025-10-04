import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Testimonial.module.css';
import GraceImg from '../../assets/GetInTouchImg.jpg'; // Replace with your image path

const testimonials = [
  {
    quote:
      'Their restoration services helped us preserve our building while enhancing its aesthetics and functionality. Highly recommended!',
    name: 'Grace',
    image: GraceImg,
  },
  {
    quote:
      'Herrington’s team was professional and efficient. They transformed our space beautifully.',
    name: 'Michael',
    image: GraceImg,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`container py-5 text-center ${styles.section}`}>
      <h6 className="text-uppercase text-secondary fw-semibold">Testimonials</h6>
      <h2 className="fw-bold mb-3">What Our Clients Say?</h2>
      <hr className={`mx-auto ${styles.divider}`} />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="mt-4"
        >
          <p className="fst-italic text-muted px-3">{testimonials[index].quote}</p>
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className={`rounded-circle mt-3 ${styles.profile}`}
          />
          <h6 className="mt-2 fw-semibold">{testimonials[index].name}</h6>
        </motion.div>
      </AnimatePresence>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`${styles.indicator} ${i === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
