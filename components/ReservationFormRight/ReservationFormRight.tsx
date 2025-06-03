import './ReservationFormRight.css';
import Link from 'next/link';
import { ReservationFormRightSchedule, Separator } from '../components';
import { forum } from '@/app/fonts';

const ReservationFormRight = () => {
    return (
        <div className="form-right text-center" style={{backgroundImage: 'url("/form-pattern.png")'}}>
            <h2 className={`${forum.className} headline-1 text-center`}>Contact Us</h2>
            <p className="contact-label">Booking Request</p>
            <Link 
                href="tel:+88123123456" 
                className="link body-1 contact-number hover-underline"
            >
                +88-123-123456
            </Link>
            
            <Separator/>

            <p className="contact-label">Location</p>
            <address className="body-4"> Restaurant St, Delicious City, <br/> London 9578, UK </address>
            <ReservationFormRightSchedule
                menu='Lunch Time'
                schedule='11.00 am - 2.30pm'
            />
            <ReservationFormRightSchedule
                menu='Dinner Time'
                schedule='05.00 pm - 10.00pm'
            />
        </div>
    )
}

export default ReservationFormRight;