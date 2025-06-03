import './Logo.css';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/" className="link logo">
            {/*TODO : 左上角图标需要更新 */}
            <Image
                src='logo/tra-logo.jpg'
                alt='Grilli-Logo'
                width={160}
                height={50}
                className='d-block hght-auto'
            />
        </Link>
    )
}

export default Logo;

