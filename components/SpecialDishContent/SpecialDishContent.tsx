import './SpecialDishContent.css';
import Link from 'next/link';
import Image from 'next/image';
import { forum } from '@/app/fonts';

const SpecialDishContent = () => {
    return (
        <div className="special-dish-content bg-black-10">
            <div className="container">
                <Image
                    src='/badge-1.png'
                    alt='badge'
                    width={28}
                    height={41}
                    className='d-block hght-auto abs-img'
                />
                <p className="section-subtitle label-2">Special Dish</p>
                <h2 className={`${forum.className} headline-1 section-title`}>Tonkatsu</h2>
                <p className="section-text">
                    Indulge in our signature Tonkatsu Ramen — crispy, golden perfection paired with tender, juicy pork. Crafted with precision and passion, it’s a celebration of flavor and culinary mastery in every bite.
                </p>
                <div className="wrapper">
                    <del className="del body-3">$20.00</del>
                    <span className="span body-1">$16.50</span>
                </div>
                <Link href="/menu" className="link btn btn-primary">
                    <span className="text text-1">View All Menu</span>
                    <span className="text text-2">View All Menu</span>
                </Link>
            </div>
        </div>
    )
}

export default SpecialDishContent;

