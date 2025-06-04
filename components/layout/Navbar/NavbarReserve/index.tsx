import React from 'react';
import Link from 'next/link';

interface NavbarReserveProps {
  containedStyles: string;
}

const NavbarReserve: React.FC<NavbarReserveProps> = ({ containedStyles }) => {
  return (
    <Link 
      href="#reservation" 
      className={`btn ${containedStyles}white`}
    >
      Reserve Table
    </Link>
  );
};

export default NavbarReserve; 