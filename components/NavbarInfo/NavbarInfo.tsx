import './NavbarInfo.css';
import Link from 'next/link';
import { forum } from '@/app/fonts';
import { NavBarInfoProps } from '@/types/types';
import { Separator } from '../components';

/**
 * NavbarInfo component displays the information in the navbar.
 * @param title
 * @param location
 * @param city
 * @param schedule
 * @param email
 * @param contact
 * @param phone
 * @constructor
 * @description 完成修改
 */
const NavbarInfo = ({title, location, city, schedule, email, contact, phone} : NavBarInfoProps) => {
    return (
        <div className="text-center">
            <p className={`${forum.className} headline-1 navbar-title`}>{title}</p>
            <address className="body-4">{location} <br/> {city}</address>
            <p className="body-4 navbar-text">{schedule}</p>
            <Link href={`mailto:${email}`} className="d-block link sidebar-link">{email}</Link>

            <Separator containedStyles="separator-navbar-info"/>

            <p className="contact-label">{contact}</p>
            <Link href={`tel:${phone.split('-').join('')}`} className="d-block link body-1 contact-number hover-underline">{phone}</Link>
        </div>
    )
}

export default NavbarInfo;


