import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import './styles.css';

const Footer = () => {
  return (
    <footer 
      className="footer section has-bg-image text-center" 
      style={{backgroundImage: "url('/footer-bg.jpg')"}}
    >
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer; 