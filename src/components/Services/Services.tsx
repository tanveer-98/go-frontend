import React from 'react';
import './styles.css'; // Import the CSS file for styling
import SERVICES from './services.json'
import CardFlip from '../Card-flip/CardFlip';
const ServicesSection = () => {

  return (
    <section className="services-section">
      <h2 className="service-title">Our Services</h2>
      <div className="services-container">
        {SERVICES.map((service, index) => 
          <CardFlip
          title = {service.title}
          description={service.description}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;