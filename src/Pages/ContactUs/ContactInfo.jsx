import React from 'react';
import styles from './ContactInfo.module.css';
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <section className={`container-fluid ${styles.contactSection}`}>
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className={styles.contactTitle}>Innovate Together</h2>
          <p className={styles.contactSubtext}>
            We are always ready to help you at any time, let’s talk together.
          </p>
        </div>

        {/* Equal-height Flex Row */}
        <div className={`row ${styles.equalRow}`}>
          {/* Left Side */}
          <div className={`col-md-6 ${styles.flexBox}`}>
            <div className={styles.cardBox}>
              <div className="row g-4">
                <div className="col-6">
                  <div className={styles.infoBox}>
                    <div className={styles.iconRow}>
                      <FiMapPin className={styles.contactIcon} />
                      <div>
                        <h5 className={styles.contactLabel}>Address Business</h5>
                        <p className={styles.contactText}>
                          12,Dummy Street,Lorem City<br/>
                          Dummy State
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.infoBox}>
                    <div className={styles.iconRow}>
                      <FiMail className={styles.contactIcon} />
                      <div>
                        <h5 className={styles.contactLabel}>Email Address</h5>
                        <p className={styles.contactText}>
                          iTech@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.infoBox}>
                    <div className={styles.iconRow}>
                      <FiPhone className={styles.contactIcon} />
                      <div>
                        <h5 className={styles.contactLabel}>Contact With Us</h5>
                        <p className={styles.contactText}>PH: -91 7365772634</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.infoBox}>
                    <div className={styles.iconRow}>
                      <FiClock className={styles.contactIcon} />
                      <div>
                        <h5 className={styles.contactLabel}>Working Time</h5>
                        <p className={styles.contactText}>
                          Mon–Sat: 8.00am – 8.00pm<br />
                          Holiday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className={`col-md-6 ${styles.flexBox}`}>
            <div className={styles.cardBox}>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className={styles.input} placeholder="Full Name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className={styles.input} placeholder="Email Address" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className={styles.input} placeholder="Phone Number" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Tell us what you're looking for!"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea className={styles.textarea} rows="5" placeholder="Write Message..." />
                </div>

                <div className="text-end">
                  <button type="submit" className={styles.submitButton}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
