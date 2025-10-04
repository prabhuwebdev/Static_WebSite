import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './OurProjects.module.css';
import Project1 from '../../assets/projectimages/ProjectImg1.png';
import Project2 from '../../assets/projectimages/ProjectImg2.png';
import Project3 from '../../assets/projectimages/ProjectImg3.png';
import Project4 from '../../assets/projectimages/ProjectImg4.png';
import Project5 from '../../assets/projectimages/ProjectImg5.png';
import Project6 from '../../assets/projectimages/ProjectImg6.png';

const projects = [
  { image: Project1, alt: 'Healthcare Website' },
  { image: Project2, alt: 'Marine Travel Site' },
  { image: Project3, alt: 'Community Safety Portal' },
  { image: Project4, alt: 'Real Estate Platform' },
  { image: Project5, alt: 'Dental Services Site' },
  { image: Project6, alt: 'Fitness & Wellness App' },
];

const OurProjects = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        {/* Section Header */}
        <div className="mb-5">
          <h6 className="text-uppercase text-secondary fw-semibold">WHAT WE DO</h6>
          <h2 className="fw-bold">Websites We've Worked On Recently</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            In to an attended desirous, raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as.
          </p>
        </div>

        {/* Project Grid */}
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
              <div className={`${styles.card} mx-auto`}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={`${styles.image} rounded`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
