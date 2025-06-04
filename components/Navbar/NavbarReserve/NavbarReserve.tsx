import { NavbarFigureProps } from '@/types/types';
import './NavbarReserve.css';
import Link from 'next/link';


const NavbarReserve = ({containedStyles} : NavbarFigureProps) => {
    return (
        <Link href="/public" className="link btn btn-secondary">
            <span className={`${containedStyles}1`}>Find A Table</span>
            <span className={`${containedStyles}2`} aria-hidden="true">Find A Table</span>
        </Link>
    )
}

export default NavbarReserve;