import React from 'react';
import './styles.css';

interface TopBarItemProps {
  containedStyles: string;
  link: boolean;
  iconName: string;
  description: string;
}

const TopBarItem: React.FC<TopBarItemProps> = ({
  containedStyles,
  link,
  iconName,
  description
}) => {
  const content = (
    <>
      <div className="icon">
        <i className={iconName}></i>
      </div>
      <span className="span">{description}</span>
    </>
  );

  return link ? (
    <a href={description} className={containedStyles}>
      {content}
    </a>
  ) : (
    <div className={containedStyles}>
      {content}
    </div>
  );
};

export default TopBarItem; 