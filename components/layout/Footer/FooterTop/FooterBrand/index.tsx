import React from 'react';
import { Logo } from '../../../../shared';
import './styles.css';

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <Logo />
      <p className="footer-text">
        Financial experts support or help you to find out which way you can raise your funds more.
      </p>
    </div>
  );
};

export default FooterBrand; 