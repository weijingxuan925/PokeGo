import React from 'react';
import './styles.css';

interface SliderButtonProps {
  direction: 'prev' | 'next';
  icon: string;
  handleSlide: () => void;
}

const SliderButton: React.FC<SliderButtonProps> = ({
  direction,
  icon,
  handleSlide
}) => {
  return (
    <button 
      className={`slider-btn ${direction}`}
      onClick={handleSlide}
      aria-label={`${direction} slide`}
    >
      <i className={icon}></i>
    </button>
  );
};

export default SliderButton; 