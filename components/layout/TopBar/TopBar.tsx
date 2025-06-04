import React from 'react';
import { Separator } from '../../shared';
import TopBarItem from './TopBarItem';
import { ionIcons } from '@/constants/constants';
import './styles.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <TopBarItem
          containedStyles="topbar-item"
          link={false}
          iconName={ionIcons.locationOutline}
          description="1588 Granville St, Halifax, NS B3J 1X1"
        />
        <Separator />
        <TopBarItem
          containedStyles="topbar-item item-2"
          link={false}
          iconName={ionIcons.timeOutline}
          description="Daily : 11.00 am to 8.00 pm"
        />
        <TopBarItem
          containedStyles="topbar-item"
          link={true}
          iconName={ionIcons.callOutline}
          description="tel:+1 (902) 423-5854"
        />
        <Separator />
        <TopBarItem
          containedStyles="topbar-item"
          link={true}
          iconName={ionIcons.mailOutline}
          description="mailto:booking@restaurant.com"
        />
      </div>
    </div>
  );
};

export default TopBar; 