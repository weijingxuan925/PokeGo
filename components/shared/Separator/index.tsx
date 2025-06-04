import React from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`separator ${className}`}>
      <img src="/separator.svg" width={40} height={40} alt="separator" />
    </div>
  );
};

export default Separator; 