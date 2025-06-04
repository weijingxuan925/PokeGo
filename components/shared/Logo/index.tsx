import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../logo.jpg';

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image src={logo} width={200} height={50} alt="Restaurant Logo" priority />
    </Link>
  );
};

export default Logo; 