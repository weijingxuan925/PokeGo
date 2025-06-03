'use client';

import './FooterBrand.css';
import Link from 'next/link';
import { IonIcon } from '@ionic/react';
import { ionIcons } from '@/constants/constants';
import { Logo, Separator } from '../components';
import { forum } from '@/app/fonts';

const FooterBrand = () => {
    return (
        <div className="footer-brand has-before has-after">
            <Logo/>
            
            <address className="body-4">Restaurant St, Delicious City, London 9578, UK</address>
            <Link href="mailto:booking@grilli.com" className="link body-4 contact-link">booking@grilli.com</Link>
            <Link href="tel:+88123123456" className="link body-4 contact-link">Booking Request : +88-123-123456</Link>
            <p className="body-4">Open : 09:00 am - 01:00 pm</p>

            <div className="wrapper">
                <Separator/>
                <Separator/>
                <Separator/>
            </div>
            <p className={`${forum.className} title-1`}>Get News & Offers</p>
            <p className="label-1">Subscribe us & Get <span className="span">25% Off</span></p>

            <form action="" className="input-wrapper">
                <div className="icon-wrapper">
                    <IonIcon 
                        icon={ionIcons.mailOutline} 
                        aria-hidden="true"
                        className='ion-icon'
                    />
                    <input type="email" name="email_address" placeholder="Your email" className="input-field"/>
                </div>

                <button className="btn btn-secondary">
                    <span className="text text-1">Subscribe</span>
                    <span className="text text-2" aria-hidden="true">Subscribe</span>
                </button>
            </form>
        </div>
    )
}

export default FooterBrand;