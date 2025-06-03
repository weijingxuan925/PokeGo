import './TopBar.css';
import { Separator, TopBarItem } from '../components';
import { ionIcons } from '@/constants/constants';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <TopBarItem
                    containedStyles="topbar-item"
                    link={false}
                    iconName={ionIcons.locationOutline}
                    description="Restaurant St, Delicious City, London 9578, UK"
                />
                <Separator/>
                <TopBarItem
                    containedStyles="topbar-item item-2"
                    link={false}
                    iconName={ionIcons.timeOutline}
                    description="Daily : 8.00 am to 10.00 pm"
                />
                <TopBarItem
                    containedStyles="topbar-item"
                    link={true}
                    iconName={ionIcons.callOutline}
                    description="+1 123 456 7890"
                />
                <Separator/>
                <TopBarItem
                    containedStyles="topbar-item"
                    link={true}
                    iconName={ionIcons.mailOutline}
                    description="booking@restaurant.com"
                />
            </div>
        </div>
    )
}

export default TopBar;