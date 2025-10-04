import React from 'react';
import styles from './ContactLocation.module.css';

const ContactLocation = () => {
  return (
    <section className={styles.mapSection}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d80.2278!3d12.9486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d123456789%3A0xabcdef123456789!2sSample%20Location!5e0!3m2!1sen!2sin!4v1696234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactLocation;
