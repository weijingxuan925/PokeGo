import './Menu.css';
import Link from 'next/link';
import Image from 'next/image';
import { MenuList } from '../components';
import { forum } from '@/app/fonts';

const Menu = () => {
    return (
        <section className="section menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">Special Selection</p>
                <h2 className={`${forum.className} headline-1 section-title text-center`}>Delicious Menu</h2>
                <MenuList/>
                <p className="menu-text text-center">
                    During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
                </p>
                <Link href="/" className="link btn btn-primary">
                    <span className="text text-1">View All Menu</span>
                    <span className="text text-2">View All Menu</span>
                </Link>
                <Image
                    src='/shape-5.png'
                    alt='shape'
                    width={921}
                    height={1036}
                    className='d-block hght-auto shape shape-2 move-anim'
                />
                <Image
                    src='/shape-6.png'
                    alt='shape'
                    width={343}
                    height={345}
                    className='d-block hght-auto shape shape-3 move-anim'
                />
            </div>
        </section>
    )
}

export default Menu;
