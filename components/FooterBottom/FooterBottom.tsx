import './FooterBottom.css';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <p className="copyright">
                &copy; 2024 Grilli. All Rights Reserved | Crafted by <Link href="https://github.com/eruedasanchez" className="link">eruedasanchez</Link> 
            </p>
        </div>
    )
}

export default FooterBottom;