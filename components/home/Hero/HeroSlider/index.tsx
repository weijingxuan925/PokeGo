import React from 'react';
import { slides } from '@/constants/constants';
import SliderItem from './SliderItem';
import './styles.css';

interface HeroSliderProps {
  currentSlidePosition: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ currentSlidePosition }) => {
  return (
    <ul className="hero-slider">
      <SliderItem
        image="/hero-slider-1.jpg"
        subtitle="Traditional & Hygine"
        title="For the love of delicious food"
        text="Come with family & feel the joy of mouthwatering food"
        active={currentSlidePosition === slides.FIRST_SLIDE}
      />
      <SliderItem
        image="/hero-slider-2.jpg"
        subtitle="delightful experience"
        title="Flavors Inspired by the Seasons"
        text="Come with family & feel the joy of mouthwatering food"
        active={currentSlidePosition === slides.SECOND_SLIDE}
      />
      <SliderItem
        image="/hero-slider-3.jpg"
        subtitle="amazing & delicious"
        title="Where every flavor tells a story"
        text="Come with family & feel the joy of mouthwatering food"
        active={currentSlidePosition === slides.THIRD_SLIDE}
      />
    </ul>
  );
};

export default HeroSlider; 