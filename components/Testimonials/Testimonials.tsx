import './Testimonials.css';
import Image from 'next/image';
import { Separator } from '../components';
import { forum } from '@/app/fonts';

const Testimonials = () => {
    return (
        <section className="section testi text-center has-bg-image" style={{backgroundImage: 'url("/testimonial-bg.jpg")'}}>
            <div className="container">
                <div className={`${forum.className} quote`}>”</div>
                <p className={`${forum.className} headline-2 testi-text`}>
                    I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                </p>
                <div className="wrapper">
                    <Separator/>
                    <Separator/>
                    <Separator/>
                </div>
                <div className="profile">
                    <Image
                        src='/testi-avatar.jpg'
                        alt='Sam Jhonson'
                        width={100}
                        height={100}
                        className='d-block hght-auto img'
                    />
                    <p className="label-2 profile-name">Sam Jhonson</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;