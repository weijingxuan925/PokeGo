import './NavbarOpen.css';
import { NavbarOpenProps } from '@/types/types';

const NavbarOpen = ({handleButtonsMenu, containedStyles} : NavbarOpenProps) => {
    return (
        <button 
            className="d-block button nav-open-btn" 
            aria-label="open menu"
            onClick={handleButtonsMenu}
        >
            <span className={`${containedStyles}1`}></span>
            <span className={`${containedStyles}2`}></span>
            <span className={`${containedStyles}3`}></span>
        </button>
    )
}

export default NavbarOpen;
