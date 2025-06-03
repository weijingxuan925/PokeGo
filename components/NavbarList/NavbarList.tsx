import './NavbarList.css';
import { NavbarItem } from '../components';

const NavbarList = () => {
    return (
        <ul className="navbar-list">
            <NavbarItem title="Home"  link="/home"/>
            <NavbarItem title="Menus" link="/menu"/>
            <NavbarItem title="About Us" link="/about"/>
            <NavbarItem title="Our Chefs" link="/chef"/>
            <NavbarItem title="Contact" link="/contact"/>
        </ul>
    )
}

export default NavbarList;
