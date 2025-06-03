import './Booking.css';
import Link from 'next/link';
import Image from 'next/image';

const Booking = () => {
    return (
        <Link href="/" className="link hero-btn has-after">
            <Image
                src='/hero-icon.png'
                alt='booking-icon'
                width={48}
                height={48}
                className='d-block hght-auto img'
            />
            <span className="label-2 text-center span">Book A Table</span>
        </Link> 
    )
}

export default Booking;