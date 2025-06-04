import { ReservationFormRightScheduleProps } from '@/types/types';

const ReservationFormRightSchedule = ({menu, schedule} : ReservationFormRightScheduleProps) => {
    return (
        <>
            <p className="contact-label">{menu}</p>
            <p className="body-4"> Monday to Sunday <br/> {schedule}</p>
        </>
    )
}

export default ReservationFormRightSchedule;

