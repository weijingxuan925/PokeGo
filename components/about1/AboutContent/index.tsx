import React from 'react';
import Image from 'next/image';
import { forum } from '@/app/fonts';
import './styles.css';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-content-left">
        <Image
          src="/about-1.jpg"
          alt="about image"
          width={400}
          height={600}
          className="about-img"
        />
      </div>
      <div className="about-content-right">
        <h2 className={`${forum.className} title-2`}>
          Our Story
        </h2>
        <p className="section-text">
          Founded in 2010, our restaurant has been serving authentic cuisine with a modern twist. 
          We believe in using only the freshest ingredients and creating memorable dining experiences.
        </p>
        <p className="section-text">
          Our team of expert chefs brings years of experience and passion to every dish, 
          ensuring that each visit is a celebration of flavors and culinary excellence.
        </p>
      </div>
    </div>
  );
};

export { AboutContent }; 