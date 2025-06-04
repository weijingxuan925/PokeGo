import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components';
import { forum } from '@/app/fonts';
import { ReservationFormRightSchedule } from './ReservationFormRightSchedule';
import './styles.css';

const ReservationFormRight = () => {
  return (
    <div className="form-right text-center" style={{ backgroundImage: 'url("/form-pattern.png")' }}>
      <h2 className={`${forum.className} headline-1 text-center`}>联系我们</h2>
      <p className="contact-label">预订请求</p>
      <Link
        href="tel:+88123123456"
        className="link body-1 contact-number hover-underline"
      >
        +88-123-123456
      </Link>

      <Separator />

      <p className="contact-label">地址</p>
      <address className="body-4">
        餐厅街，美食城，<br />
        伦敦 9578，英国
      </address>
      <ReservationFormRightSchedule
        menu="午餐时间"
        schedule="11:00 - 14:30"
      />
      <ReservationFormRightSchedule
        menu="晚餐时间"
        schedule="17:00 - 22:00"
      />
    </div>
  );
};

export { ReservationFormRight }; 