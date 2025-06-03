import './ReservationForm.css';
import { ReservationFormLeft, ReservationFormRight } from '../components';

const ReservationForm = () => {
    return (
        <div className="form reservation-form bg-black-10">
            <ReservationFormLeft/>
            <ReservationFormRight/>
        </div>
    )
}

export default ReservationForm;