import './FooterTop.css';
import { LINKS } from '@/constants/constants';
import { FooterBrand, FooterList } from '../components';

const FooterTop = () => {
    return (
        <div className="footer-top grid-list">
            <FooterBrand/>
            <FooterList list={LINKS.company}/>
            <FooterList list={LINKS.socialNetworks}/>
        </div>
    )
}

export default FooterTop;
