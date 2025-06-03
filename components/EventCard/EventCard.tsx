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
                    {/* <img src="./assets/img/event-1.jpg" width="350" height="450" loading="lazy" alt="Flavour so good you’ll try to eat with your eyes." class="img-cover"> */}
                    {/* <time className="publisher-date label-2" datetime="2022-09-15">15/09/2022</time> */}
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


