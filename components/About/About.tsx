import './About.css';
import { AboutContent, AboutBanner } from '../components';

const About = () => {
    return (
        <section className="section about text-center">
            <div className="container">
                <AboutContent/>
                <AboutBanner/>
            </div>
        </section>
    )
}

export default About;