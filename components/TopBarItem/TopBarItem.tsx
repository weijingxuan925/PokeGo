'use client';

import './TopBarItem.css';
import { IonIcon } from '@ionic/react';
import { TopBarItemProps } from "@/types/types";

const TopBarItem = ({containedStyles, link, iconName, description} : TopBarItemProps) => {
    return (
        <div className={`${containedStyles} ${link ? 'link' : ''}`}>
            <div className="icon">
                <IonIcon 
                    icon={iconName} 
                    aria-hidden="true"
                    className='ion-icon'
                />
            </div>
            <span className="span">{description}</span>
        </div>
    )
}

export default TopBarItem;

