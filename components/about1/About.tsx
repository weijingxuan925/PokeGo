import React from 'react';
import { AboutContent } from './AboutContent';
import { AboutBanner } from './AboutBanner';
import './styles.css';

const About = () => {
  return (
    <section className="section about text-center">
      <div className="container">
        <AboutContent />
        <AboutBanner />
      </div>
    </section>
  );
};

export default About; 