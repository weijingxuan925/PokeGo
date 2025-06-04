import './FeatureItem.css';
import Image from "next/image";
import { MenuCardProps } from "@/types/types";
import { forum } from "@/app/fonts";

const FeatureItem = ({cardNumber, cardTitle, cardDescription} : MenuCardProps) => {
    return (
        <li className="feature-item">
            <div className="feature-card">
                <div className="card-icon">
                    <Image
                        src={`/features-icon-${cardNumber}.png`}
                        alt='icon'
                        width={100}
                        height={80}
                        className='d-block hght-auto'
                    />
                </div>
                <h3 className={`${forum.className} title-2 card-title`}>{cardTitle}</h3>
                <p className="label-1 card-text">{cardDescription}</p>
            </div>
        </li>
    )
}

export default FeatureItem;

