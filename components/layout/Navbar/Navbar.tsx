'use client';

import React, { useEffect, useState } from 'react';
import { Logo } from '../../shared';
import NavbarClose from './NavbarClose';
import NavbarInfo from './NavbarInfo';
import NavbarList from './NavbarList';
import NavbarOpen from './NavbarOpen';
import NavbarReserve from './NavbarReserve';
import './styles.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY >= 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'active' : ''}`}>
            <div className="container">
                <Logo />
                <nav className={`navbar ${openMenu ? 'active' : ''}`}>
                    <NavbarClose handleButtonsMenu={() => setOpenMenu(false)} />
                    <Logo />
                    <NavbarList />
                    <NavbarInfo
                        title="Visit Us"
                        location="Restaurant St, Delicious City,"
                        city="London 9578, UK"
                        schedule="Open: 9.30 am - 2.30pm"
                        email="booking@restaurant.com"
                        contact="Booking Request"
                        phone="+88-123-123456"
                    />
                </nav>
                <NavbarReserve containedStyles="text text-" />
                <NavbarOpen
                    handleButtonsMenu={() => setOpenMenu(true)}
                    containedStyles="line line-"
                />
                <div className={`overlay ${openMenu ? 'active' : ''}`}></div>
            </div>
        </header>
    );
};

export default Navbar; 