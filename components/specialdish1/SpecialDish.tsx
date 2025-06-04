import React from 'react';
import Image from 'next/image';
import { SpecialDishContent } from './SpecialDishContent';
import './styles.css';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center">
      <div className="special-dish-banner">
        <Image
          src="/Special/spe.jpg"
          alt="special-dish"
          width={948}
          height={900}
          className="d-block hght-auto img-cover"
        />
      </div>
      <SpecialDishContent />
      <Image
        src="/shape-4.png"
        alt="shape-4"
        width={179}
        height={359}
        className="d-block hght-auto shape shape-1"
      />
      <Image
        src="/shape-9.png"
        alt="shape-9"
        width={351}
        height={462}
        className="d-block hght-auto shape shape-2"
      />
    </section>
  );
};

export default SpecialDish; 