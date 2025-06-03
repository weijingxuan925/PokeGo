import './SliderItem.css';
import Image from "next/image";
import { forum } from '@/app/fonts';
import { ViewMenu } from "../components";
import { SliderItemProps } from "@/types/types";

const SliderItem = ({image, subtitle, title, text, active} : SliderItemProps) => {
    return (
        <li className={`slider-item ${active ? 'active' : ''}`}>
            <div className="slider-bg">
                <Image
                    src={image}
                    alt='hero-slider-1'
                    width={1880}
                    height={950}
                    className='d-block hght-auto img-cover'
                />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{subtitle}</p>
            <h1 className={`${forum.className} display-1 hero-title slider-reveal`}>{title}</h1>
            <p className="body-2 hero-text slider-reveal">{text}</p>
            <ViewMenu/>
        </li>
    )
}

export default SliderItem;
