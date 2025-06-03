import Link from 'next/link';
import { forum } from '@/app/fonts';

const AboutContent = () => {
    return (
        <div className="about-content">
            <p className="label-2 section-subtitle">Our story</p>
            <h2 className={`${forum.className} headline-1 section-title`}>Every Flavor Tells a Story</h2>
            <p className="section-text">Embarking on a culinary journey, our restaurant story unfolds with a rich history of passion and dedication. We take pride in offering a dining experience that transcends time, where each dish is a testament to our commitment to excellence.</p>
            
            <div className="contact-label">Book Through Call</div>
            
            <Link href="tel:+804001234567" className="link body contact-number hover-underline">+80 (400) 123 4567</Link>
            <Link href="/" className="link btn btn-primary">
                <span className="text text-1">Read More</span>
                <span className="text text-2">Read More</span>
            </Link>
        </div>
    )
}

export default AboutContent;