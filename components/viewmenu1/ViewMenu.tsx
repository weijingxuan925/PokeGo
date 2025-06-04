import React from 'react';
import Link from 'next/link';
import './styles.css';

interface ViewMenuProps {
  href?: string;
  className?: string;
}

const ViewMenu: React.FC<ViewMenuProps> = ({ 
  href = '/menu', 
  className = '' 
}) => {
  return (
    <Link 
      href={href} 
      className={`btn btn-primary ${className}`}
    >
      <span className="span">查看菜单</span>
      <span className="material-symbols-outlined">arrow_forward</span>
    </Link>
  );
};

export default ViewMenu; 