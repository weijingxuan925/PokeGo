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
                    description="1588 Granville St, Halifax, NS B3J 1X1"
                />
                <Separator/>
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
                    description="+1 （902) 423-5854"
                />
                <Separator/>
                {/* TODO: 超链接失效 */}
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