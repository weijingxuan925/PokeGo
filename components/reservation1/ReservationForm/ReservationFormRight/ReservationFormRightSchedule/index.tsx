import React from 'react';

interface ReservationFormRightScheduleProps {
  menu: string;
  schedule: string;
}

const ReservationFormRightSchedule = ({ menu, schedule }: ReservationFormRightScheduleProps) => {
  return (
    <>
      <p className="contact-label">{menu}</p>
      <p className="body-4">
        周一至周日 <br /> {schedule}
      </p>
    </>
  );
};

export { ReservationFormRightSchedule }; 