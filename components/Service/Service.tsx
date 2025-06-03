import './Service.css';
import Image from 'next/image';
import { ServiceList } from '../components';
import { forum } from '@/app/fonts';

const Service = () => {
    return (
        <section className="section service bg-black-10 text-center">
            <div className="container">
                <p className="section-subtitle label-2">Flavors For Royalty</p>
                <h2 className={`${forum.className} headline-1 section-title`}>We Offer Top Notch</h2>
                <p className="section-text">Indulge in a culinary journey at our restaurant, where each dish is crafted with passion and creativity. Savor the rich flavors and exquisite combinations that make dining with us a truly memorable experience.</p>
                <ServiceList/>
                <Image
                    src='/shape-1.png'
                    alt='shape-1'
                    width={246}
                    height={412}
                    className='d-block hght-auto shape shape-1 move-anim'
                />
                <Image
                    src='/shape-2.png'
                    alt='shape-2'
                    width={343}
                    height={345}
                    className='d-block hght-auto shape shape-2 move-anim'
                />
            </div>
        </section>
    )
}

export default Service;