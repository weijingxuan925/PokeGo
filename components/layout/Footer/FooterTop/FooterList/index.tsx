import React from 'react';
import FooterLink from './FooterLink';
import './styles.css';

interface FooterListProps {
  list: {
    title: string;
    links: Array<{
      name: string;
      href: string;
    }>;
  };
}

const FooterList: React.FC<FooterListProps> = ({ list }) => {
  return (
    <ul className="footer-list">
      <li>
        <p className="footer-list-title">{list.title}</p>
      </li>
      {list.links.map((link, index) => (
        <li key={index}>
          <FooterLink {...link} />
        </li>
      ))}
    </ul>
  );
};

export default FooterList; 