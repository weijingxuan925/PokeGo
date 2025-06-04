'use client';

import './ReservationFormLeft.css';
import Link from 'next/link';
import { ReservationFormIconWrapper } from '../../components';
import { IonIcon } from '@ionic/react';
import { diners, ionIcons, schedules } from '@/constants/constants';
import { forum } from '@/app/fonts';

const ReservationFormLeft = () => {
    return (
        <form action="" className="form-left">
            <h2 className={`${forum.className} headline-1 text-center`}>Online Reservation</h2>
            <p className="form-text text-center">
                Booking request <br/> <Link href="tel:+88123123456" className="link">+88-123-123456</Link> <br/> 
                or fill out the order form
            </p>
            <div className="input-wrapper">
                <input type="text" name="name" placeholder="Your Name" className="input-field"/>
                <input type="tel" name="phone" placeholder="Phone Number" className="input-field"/>
            </div>
            <div className="input-wrapper">
                <ReservationFormIconWrapper
                    iconType='personOutline'
                    options={diners}
                />
                <div className="icon-wrapper">
                    <IonIcon
                        icon={ionIcons.calendarClearOutline} 
                        aria-hidden="true"
                        className="ion-icon"
                    />
                    <input type="date" name="reservation-date" className="input-field"/>
                    <IonIcon
                        icon={ionIcons.chevronDown} 
                        aria-hidden="true"
                        className="ion-icon"
                    />
                </div>
                <ReservationFormIconWrapper
                    iconType='timeOutline'
                    options={schedules}
                />
            </div>
            <textarea name="message" placeholder="Message" className="input-field"></textarea>
            <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Book A Table</span>
                <span className="text text-2" aria-hidden="true">Book A Table</span>
            </button>
        </form>
    )
}

export default ReservationFormLeft;