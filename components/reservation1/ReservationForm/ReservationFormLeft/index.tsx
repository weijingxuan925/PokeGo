'use client';

import React from 'react';
import Link from 'next/link';
import { IonIcon } from '@ionic/react';
import { diners, ionIcons, schedules } from '@/constants/constants';
import { forum } from '@/app/fonts';
import { ReservationFormIconWrapper } from './ReservationFormIconWrapper';
import './styles.css';

const ReservationFormLeft = () => {
  return (
    <form action="" className="form-left">
      <h2 className={`${forum.className} headline-1 text-center`}>在线预订</h2>
      <p className="form-text text-center">
        预订请求 <br /> <Link href="tel:+88123123456" className="link">+88-123-123456</Link> <br />
        或填写预订表单
      </p>
      <div className="input-wrapper">
        <input type="text" name="name" placeholder="您的姓名" className="input-field" />
        <input type="tel" name="phone" placeholder="电话号码" className="input-field" />
      </div>
      <div className="input-wrapper">
        <ReservationFormIconWrapper
          iconType="personOutline"
          options={diners}
        />
        <div className="icon-wrapper">
          <IonIcon
            icon={ionIcons.calendarClearOutline}
            aria-hidden="true"
            className="ion-icon"
          />
          <input type="date" name="reservation-date" className="input-field" />
          <IonIcon
            icon={ionIcons.chevronDown}
            aria-hidden="true"
            className="ion-icon"
          />
        </div>
        <ReservationFormIconWrapper
          iconType="timeOutline"
          options={schedules}
        />
      </div>
      <textarea name="message" placeholder="留言" className="input-field"></textarea>
      <button type="submit" className="btn btn-secondary">
        <span className="text text-1">预订餐桌</span>
        <span className="text text-2" aria-hidden="true">预订餐桌</span>
      </button>
    </form>
  );
};

export { ReservationFormLeft }; 