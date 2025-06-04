import './ServiceCard.css';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceCardProps } from '@/types/types';
import { forum } from '@/app/fonts';

const ServiceCard = ({cardNumber, cardTitle} : ServiceCardProps) => {
    return (
        <li>
            <div className="service-card">
                <Link href="/public" className="link has-before hover:shine">
                    <figure className="card-banner img-holder" style={{ width: '285px', height: '336px'}}>
                        <Image
                            src={`/Serve/Serve-${cardNumber}.jpg`}
                            alt={cardTitle}
                            width={285}
                            height={336}
                            className='d-block hght-auto img-cover'
                        />
                    </figure>
                </Link>
                <div className="cart-content">
                    <h3 className={`${forum.className} title-4 card-title`}>
                        <Link href="/" className="link">{cardTitle}</Link>
                    </h3>
                    <Link href="/" className="link btn-text hover-underline label-2">View Menu</Link>
                </div>
            </div>
        </li>
    )
}

export default ServiceCard;
