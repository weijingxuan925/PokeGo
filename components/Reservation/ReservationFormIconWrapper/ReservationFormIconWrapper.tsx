'use client';

import { ReservationFormIconWrapperProps } from '@/types/types';
import { ionIcons } from '@/constants/constants';
import { IonIcon } from '@ionic/react';

const ReservationFormIconWrapper = ({iconType, options} : ReservationFormIconWrapperProps) => {
    return (
        <div className="icon-wrapper">
            <IonIcon
                icon={iconType === 'personOutline' ? ionIcons.personOutline : ionIcons.timeOutline} 
                aria-hidden="true"
                className="ion-icon"
            />
            <select name="person" className="input-field">
                {
                    options.map((option, index) => (
                        <option 
                            key={index} 
                            value={
                                iconType === 'personOutline' ? 
                                    option.toLowerCase().split(' ').join().replace(',', '-') : 
                                    option.split(' ').join('')
                            }
                        >
                            {iconType === 'personOutline' && index !== 0 ? `${option}s` : option}
                        </option>
                    ))
                }
            </select>
            <IonIcon
                icon={ionIcons.chevronDown} 
                aria-hidden="true"
                className="ion-icon"
            />
        </div>
    )
}

export default ReservationFormIconWrapper;


