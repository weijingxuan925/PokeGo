import React from 'react';
import Link from 'next/link';
import './styles.css';

interface FooterLinkProps {
  name: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ name, href }) => {
  return (
    <Link href={href} className="footer-link hover-underline">
      {name}
    </Link>
  );
};

export default FooterLink; 