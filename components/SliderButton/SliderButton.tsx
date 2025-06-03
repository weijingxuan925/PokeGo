'use client';

import './SliderButton.css';
import { SliderButtonProps } from "@/types/types";
import { IonIcon } from "@ionic/react";

const SliderButton = ({direction, icon, handleSlide} : SliderButtonProps) => {
    return (
        <button 
            className={`slider-btn ${direction}`}
            onClick={() => handleSlide(direction)}
        >
            <IonIcon 
                icon={icon} 
                aria-hidden="true"
                style={{'--ionicon-stroke-width': '50px'}}
                className='ion-icon'
            />
        </button>     
    )
}

export default SliderButton;



