import React from 'react';
import Image from 'next/image';
import { forum } from '@/app/fonts';
import './styles.css';

interface FeatureItemProps {
  cardNumber: number;
  cardTitle: string;
  cardDescription: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  cardNumber,
  cardTitle,
  cardDescription
}) => {
  return (
    <li className="feature-item">
      <div className="feature-card">
        <div className="card-icon">
          <Image
            src={`/features-icon-${cardNumber}.png`}
            alt="feature icon"
            width={100}
            height={80}
            className="feature-icon"
          />
        </div>
        <h3 className={`${forum.className} title-2 card-title`}>
          {cardTitle}
        </h3>
        <p className="label-1 card-text">
          {cardDescription}
        </p>
      </div>
    </li>
  );
};

export default FeatureItem; 