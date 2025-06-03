'use client';

import './Hero.css';
import { Booking, HeroSlider, SliderButton } from '../components';
import { ionIcons } from '@/constants/constants';
import { useEffect, useState } from 'react';
import { slides } from '@/constants/constants';

const Hero = () => {
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  
  const handleSlide = (direction : 'prev' | 'next') => {
    setCurrentSlidePosition(prevPosition => { 
      let currentPosition = (prevPosition + 1) % slides.TOTAL_SLIDES; 

      if(direction === 'prev'){
        currentPosition = prevPosition % slides.TOTAL_SLIDES === slides.FIRST_SLIDE ? slides.THIRD_SLIDE : (prevPosition - 1) % slides.TOTAL_SLIDES; 
      }
      
      return currentPosition;
    });
  }

  useEffect(() => {}, [currentSlidePosition]);
  
  return (
    <section className="hero text-center">
      <HeroSlider currentSlidePosition={currentSlidePosition}/>
      <SliderButton 
        direction='prev' 
        icon={ionIcons.chevronBack}
        handleSlide={() => handleSlide('prev')}
      />
      <SliderButton 
        direction='next' 
        icon={ionIcons.chevronForward}
        handleSlide={() => handleSlide('next')}
      />
      <Booking/>
    </section>
  )
}

export default Hero;

