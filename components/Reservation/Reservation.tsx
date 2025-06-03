import './Reservation.css';
import { ReservationForm } from '../components';

const Reservation = () => {
    return (
        <section className="reservation">
            <div className="container">
                <ReservationForm/>
            </div>
        </section>
    )
}

export default Reservation;

