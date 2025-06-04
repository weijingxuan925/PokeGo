import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`logo ${className}`}>
      <Image
        src="/logo.png"
        alt="PokeGo"
        width={120}
        height={40}
        className="logo-img"
      />
    </Link>
  );
};

export default Logo; 