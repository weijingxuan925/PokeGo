import React from 'react';

interface NavbarOpenProps {
  handleButtonsMenu: () => void;
  containedStyles: string;
}

const NavbarOpen: React.FC<NavbarOpenProps> = ({ handleButtonsMenu, containedStyles }) => {
  return (
    <button className="nav-open-btn" onClick={handleButtonsMenu} aria-label="Open Menu">
      <span className={`${containedStyles}1`}></span>
      <span className={`${containedStyles}2`}></span>
      <span className={`${containedStyles}3`}></span>
    </button>
  );
};

export default NavbarOpen; 