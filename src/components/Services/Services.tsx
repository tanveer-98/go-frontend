import React from 'react';
import './styles.css'; // Import the CSS file for styling
import SERVICES from './services.json'

const ServicesSection = () => {


  return (
    <section className="services-section">
      <h2 className="service-title">Our Services</h2>
      <div className="services-container">
        {SERVICES.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;