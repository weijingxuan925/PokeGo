import './Feature.css';
import Image from 'next/image';
import { FeatureList } from '../components';
import { forum } from '@/app/fonts';

const Feature = () => {
    return (
        <section className="section features text-center">
            <div className="container">
                <p className="section-subtitle label-2">Why Choose Us</p>
                <h2 className={`${forum.className} headline-1 section-title`}>Our Strength</h2>
                <FeatureList/>
                <Image
                    src='/shape-7.png'
                    alt='shape'
                    width={208}
                    height={178}
                    className='d-block hght-auto shape shape-1'
                />
                <Image
                    src='/shape-8.png'
                    alt='shape'
                    width={120}
                    height={115}
                    className='d-block hght-auto shape shape-2'
                />
            </div>
        </section>
    )
}

export default Feature;


