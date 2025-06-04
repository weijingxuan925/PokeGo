import React from 'react';
import Image from 'next/image';
import { forum } from '@/app/fonts';
import './styles.css';

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="banner-content">
        <h2 className={`${forum.className} title-2`}>
          Our Mission
        </h2>
        <p className="section-text">
          To provide an exceptional dining experience through innovative cuisine, 
          warm hospitality, and a commitment to excellence in every detail.
        </p>
      </div>
      <div className="banner-image">
        <Image
          src="/about-2.jpg"
          alt="about banner"
          width={800}
          height={400}
          className="banner-img"
        />
      </div>
    </div>
  );
};

export { AboutBanner }; 