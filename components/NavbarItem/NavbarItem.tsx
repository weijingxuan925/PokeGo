import './NavbarItem.css';
import Link from 'next/link';
import { NavBarItemProps } from '@/types/types';
import { Separator } from '../components';

const NavbarItem = ({title, link} : NavBarItemProps) => {
    return (
        <li className="navbar-item">
            <Link href={`${link}`} className="d-block link navbar-link hover-underline">
                <Separator containedStyles="navbar-item-separator"/>
                <span className="span">{title}</span>
            </Link>
        </li>
    )
}

export default NavbarItem;


