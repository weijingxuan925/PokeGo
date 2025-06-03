import './AboutBanner.css';
import Image from 'next/image';

const AboutBanner = () => {
    return (
        <figure className="about-banner">
            <Image
                src='/house.jpg'
                alt='about-banner'
                width={570}
                height={570}
                className='d-block hght-auto w-100'
            />
            <div className="abs-img abs-img-1 has-before">
                <Image
                    src='/about-abs-image.jpg'
                    alt='about-abs-image'
                    width={285}
                    height={285}
                    className='d-block hght-auto w-100'
                />
            </div>
            <div className="abs-img abs-img-2 has-before">
                <Image
                    src='/badge-2.png'
                    alt='badge-2'
                    width={133}
                    height={134}
                    className='d-block hght-auto'
                />
            </div>
            <Image
                src='/shape-3.png'
                alt='shape-3'
                width={197}
                height={194}
                className='d-block hght-auto shape'
            />
        </figure>
    ) 
}

export default AboutBanner;