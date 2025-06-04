import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { forum } from '@/app/fonts';
import './styles.css';

const SpecialDishContent = () => {
  return (
    <div className="special-dish-content bg-black-10">
      <div className="container">
        <Image
          src="/badge-1.png"
          alt="badge"
          width={28}
          height={41}
          className="d-block hght-auto abs-img"
        />
        <p className="section-subtitle label-2">特色菜品</p>
        <h2 className={`${forum.className} headline-1 section-title`}>照烧鸡</h2>
        <p className="section-text">
          鲜嫩多汁的烤鸡，淋上我们特制的照烧酱汁，搭配浓郁的鸡汤、甜玉米和黑蒜油。最后撒上新鲜葱花，完美平衡风味与优雅。
        </p>

        <div className="wrapper">
          <del className="del body-3">¥20.00</del>
          <span className="span body-1">¥17.00</span>
        </div>
        <Link href="/menu" className="link btn btn-primary">
          <span className="text text-1">查看所有菜单</span>
          <span className="text text-2">查看所有菜单</span>
        </Link>
      </div>
    </div>
  );
};

export { SpecialDishContent }; 