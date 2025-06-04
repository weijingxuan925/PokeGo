import React from 'react';
import { LINKS } from '@/constants/constants';
import FooterBrand from './FooterBrand';
import FooterList from './FooterList';
import './styles.css';

const FooterTop = () => {
  return (
    <div className="footer-top grid-list">
      <FooterBrand />
      <FooterList list={LINKS.socialNetworks} />
      <FooterList list={LINKS.partners} />
    </div>
  );
};

export default FooterTop; 