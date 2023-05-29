import React from 'react';
import './styles.css'; // Import the CSS file for styling

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Our expert team of developers will create a stunning website tailored to your unique requirements. With a focus on user experience and modern design principles, we\'ll ensure your online presence is both visually appealing and highly functional.',
    },
    {
      title: 'Mobile App Development',
      description: 'From concept to execution, our mobile app development services guarantee a seamless user experience across iOS and Android platforms. Let us bring your ideas to life with intuitive interfaces, elegant animations, and powerful functionalities.',
    },
    // Add more services as needed
  ];

  return (
    <section className="services-section">
      <h2 className="service-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
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