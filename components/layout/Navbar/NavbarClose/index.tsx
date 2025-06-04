import React from 'react';

interface NavbarCloseProps {
  handleButtonsMenu: () => void;
}

const NavbarClose: React.FC<NavbarCloseProps> = ({ handleButtonsMenu }) => {
  return (
    <button 
      className="nav-close-btn" 
      onClick={handleButtonsMenu} 
      aria-label="Close Menu"
    >
      <i className="fas fa-times"></i>
    </button>
  );
};

export default NavbarClose; 