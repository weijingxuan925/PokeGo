import './Footer.css';
import { FooterBottom, FooterTop } from "../components";

const Footer = () => {
    return (
        <footer className="footer section has-bg-image text-center" style={{backgroundImage: "url('/footer-bg.jpg')"}}>
        <div className="container">
            <FooterTop/>
            <FooterBottom/>
        </div>
    </footer>
    )
}

export default Footer;


