import './Event.css';
import Link from 'next/link';
import { EventList } from '../components';
import { forum } from '@/app/fonts';

const Event = () => {
    return (
        <section className="section event bg-black-10">
            <div className="container">
                <p className="section-subtitle label-2 text-center">Recent Updates</p>
                <h2 className={`${forum.className} section-title headline-1 text-center`}>Upcoming Event</h2>
                <EventList/>
                <Link href="/" className="link btn btn-primary">
                    <span className="text text-1">View Our Blog</span>
                    <span className="text text-2">View Our Blog</span>
                </Link>
            </div>
        </section>
    )
}

export default Event;

