import './Logo.css';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/" className="link logo">
            <Image
                src='/logo.svg'
                alt='Grilli-Logo'
                width={160}
                height={50}
                className='d-block hght-auto'
            />
        </Link>
    )
}

export default Logo;

