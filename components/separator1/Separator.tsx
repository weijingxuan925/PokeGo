import React from 'react';
import './styles.css';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`separator ${className}`}>
      <div className="separator-line"></div>
      <div className="separator-icon">
        <span className="material-symbols-outlined">restaurant</span>
      </div>
      <div className="separator-line"></div>
    </div>
  );
};

export default Separator; 