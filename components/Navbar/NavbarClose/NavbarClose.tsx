'use client';

import './NavbarClose.css';
import { IonIcon } from '@ionic/react';
import { ionIcons } from '@/constants/constants';
import { NavBarButtonsProps } from '@/types/types';

const NavbarClose = ({handleButtonsMenu} : NavBarButtonsProps) => {
    return (
        <button 
            className="d-block button close-btn"
            onClick={handleButtonsMenu}
        >
            <IonIcon 
                icon={ionIcons.closeOutline} 
                aria-hidden="true"
                style={{'--ionicon-stroke-width': '50px'}}
            />
        </button>
    )
}

export default NavbarClose;

