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
                <h2 className={`${forum.className} headline-1 section-title`}>Chicken Teriyaki</h2>
                <p className="section-text">
                    Succulent grilled chicken glazed in our signature teriyaki sauce, served with rich chicken broth, sweet corn, and a hint of black garlic oil. Finished with fresh scallions for a perfect balance of flavor and elegance.
                </p>

                <div className="wrapper">
                    <del className="del body-3">$20.00</del>
                    <span className="span body-1">$17.00</span>
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

