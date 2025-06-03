import './Logo.css';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/" className="link logo">
            <Image
                {/*TODO : 左上角图标需要更新 */}
                src='logo/tra-logo.jpg'
                alt='Grilli-Logo'
                width={120}
                height={40}
                className='d-block hght-auto'
            />
        </Link>
    )
}

export default Logo;

