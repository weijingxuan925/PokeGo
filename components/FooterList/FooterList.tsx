import './FooterList.css';
import { FooterLink } from '../components';
import { FooterListProps } from '@/types/types';

const FooterList = ({list} : FooterListProps) => {
    return (
        <ul className="footer-list">
            {
                list.map((link, index) => (
                    <FooterLink key={index} href={link.href} name={link.name}/>
                ))
            }
            
        </ul>
    )
}

export default FooterList;

