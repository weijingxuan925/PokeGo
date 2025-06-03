'use client';

import './BackToTop.css';
import { ionIcons } from "@/constants/constants";
import { IonIcon } from "@ionic/react";
import Link from "next/link";

const BackToTop = () => {
    return (
        <Link href="#top" className="link back-top-btn active">
            <IonIcon 
                icon={ionIcons.chevronUp} 
                aria-hidden="true"
                className='ion-icon'
            />
        </Link>
    )
}

export default BackToTop;