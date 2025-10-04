import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './StatsCards.module.css';

const StatsCards = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <section className={styles.section}>
        <h2 className={styles.heading}>Recognized Success Worldwide</h2>
      <div className="container text-center">
        <div className="row justify-content-center">

          {/* Projects Delivered */}
          <div className="col-md-4 mb-4" ref={ref1}>
            <div className={styles.card}>
              <h3 className={styles.number}>
                {inView1 && <CountUp end={300} duration={2} />}
                <span>+</span>
              </h3>
              <p className={styles.label}>Projects Delivered</p>
            </div>
          </div>

          {/* Countries Served */}
          <div className="col-md-4 mb-4" ref={ref2}>
            <div className={styles.card}>
              <h3 className={styles.number}>
                {inView2 && <CountUp end={20} duration={2} />}
                <span>+</span>
              </h3>
              <p className={styles.label}>Countries Served</p>
            </div>
          </div>

          {/* Client Retention */}
          <div className="col-md-4 mb-4" ref={ref3}>
            <div className={styles.card}>
              <h3 className={styles.number}>
                {inView3 && <CountUp end={95} duration={2} />}
                <span>%</span>
              </h3>
              <p className={styles.label}>Client Retention Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsCards;


