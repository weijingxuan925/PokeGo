import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { forum } from '@/app/fonts';
import './styles.css';

interface MenuCardProps {
  cardNumber: number;
  cardTitle: string;
  cardPrice: number;
  cardDescription: string;
  activeSeasonal?: boolean;
  activeNew?: boolean;
  activeVegetarian?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({
  cardNumber,
  cardTitle,
  cardPrice,
  cardDescription,
  activeSeasonal,
  activeNew,
  activeVegetarian
}) => {
  return (
    <li>
      <div className="menu-card hover:card">
        <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
          <Image
            src={`/Menu/menu-${cardNumber}.png`}
            alt={cardTitle}
            width={100}
            height={100}
            className="d-block hght-auto img-cover"
          />
        </figure>
        <div>
          <div className="title-wrapper">
            <h3 className="title-3">
              <Link href="/" className={`${forum.className} link card-title`}>
                {cardTitle}
              </Link>
            </h3>
            {activeSeasonal && (
              <span className={`${forum.className} badge label-1`}>Seasonal</span>
            )}
            {activeVegetarian && (
              <span className={`${forum.className} badge label-1`}>Vegetarian</span>
            )}
            {activeNew && (
              <span className={`${forum.className} badge label-1`}>New</span>
            )}
            <span className={`${forum.className} span title-2`}>
              ${cardPrice.toFixed(2)}
            </span>
          </div>
          <p className="card-text label-1">{cardDescription}</p>
        </div>
      </div>
    </li>
  );
};

export { MenuCard }; 