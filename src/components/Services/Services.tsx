import React from 'react';

import SERVICES from './services.json'
import CardFlip from '../Card-flip/CardFlip';
const ServicesSection = () => {

  return (
    <section className="services-section">
      <h2 className="title font-ubuntu">The Services We Offer ... </h2>
      <div className="services-container">
        {SERVICES.map((service, index) => 
          <CardFlip
          title = {service.title}
          description={service.description}
          imgsrc={service.imgsrc}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;