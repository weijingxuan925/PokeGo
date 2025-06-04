import './EventCard.css';
import Image from 'next/image';
import { forum } from '@/app/fonts';
import { MenuCardProps } from '@/types/types';

const EventCard = ({cardNumber, cardTitle, cardDate, cardDescription} : MenuCardProps) => {
    return (
        <li>
            <div className="event-card has-before hover:shine">
                <div className="card-banner img-holder" style={{width: '350px', height: '450px'}}>
                    <Image
                        src={`/event-${cardNumber}.jpg`}
                        alt={cardDescription}
                        width={350}
                        height={450}
                        className='d-block hght-auto img-cover'
                    />
                    <time className="publisher-date label-2">{cardDate}</time>
                </div>
                <div className="card-content">
                    <p className="card-subtitle label-2 text-center">{cardTitle}</p>
                    <h3 className={`${forum.className} card-title-title-2 text-center`}>{cardDescription}</h3>
                </div>
            </div>
        </li>
    )
}

export default EventCard;


