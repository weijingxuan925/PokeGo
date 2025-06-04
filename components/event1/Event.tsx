import React from 'react';
import Link from 'next/link';
import { EventList } from './EventList';
import { forum } from '@/app/fonts';
import './styles.css';

const Event = () => {
  return (
    <section className="section event bg-black-10">
      <div className="container">
        <p className="section-subtitle label-2 text-center">最新动态</p>
        <h2 className={`${forum.className} section-title headline-1 text-center`}>即将举行的活动</h2>
        <EventList />
        <Link href="/" className="link btn btn-primary">
          <span className="text text-1">查看我们的博客</span>
          <span className="text text-2">查看我们的博客</span>
        </Link>
      </div>
    </section>
  );
};

export default Event; 