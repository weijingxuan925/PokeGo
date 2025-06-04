import React from 'react';
import Link from 'next/link';

const NavbarList = () => {
  const menuItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#menu', text: 'Menu' },
    { href: '#services', text: 'Services' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#reservation', text: 'Reservation' }
  ];

  return (
    <ul className="navbar-list">
      {menuItems.map((item, index) => (
        <li key={index} className="navbar-item">
          <Link href={item.href} className="navbar-link hover-underline">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList; 