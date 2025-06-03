import './MenuCard.css';
import Image from 'next/image';
import Link from 'next/link';
import { MenuCardProps } from '@/types/types';
import { forum } from '@/app/fonts';

const MenuCard = ({cardNumber, cardTitle, activeSeasonal, activeNew, cardPrice, cardDescription} : MenuCardProps) => {
    return (
        <li>
            <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{width: '100px', height: '100px'}}>
                    <Image
                        src={`/menu-${cardNumber}.png`}
                        alt={cardTitle}
                        width={100}
                        height={100}
                        className='d-block hght-auto img-cover'
                    />
                </figure>
                <div>
                    <div className="title-wrapper">
                        <h3 className="title-3"><Link href="/" className={`${forum.className} link card-title`}>{cardTitle}</Link></h3>
                        {activeSeasonal && <span className={`${forum.className} badge label-1`}>Seasonal</span>}
                        {activeNew && <span className={`${forum.className} badge label-1`}>New</span>}
                        <span className={`${forum.className} span title-2`}>${cardPrice.toFixed(2)}</span>
                    </div>
                    <p className="card-text label-1">{cardDescription}</p>
                </div>
            </div>
        </li>
    )
}

export default MenuCard;




{/* <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-1.png" width="100" height= "100" loading="lazy" alt="Greek Salad" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="#" class="card-title">Greek Salad</a>
                        </h3>
                        <span class="badge label-1">Seasonal</span>
                        <span class="span title-2">$25.50</span>
                    </div>
                    <p class="card-text label-1">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-2.png" width="100" height= "100" loading="lazy" alt="Greek Salad" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="" class="card-title">Lasagne</a>
                        </h3>
                        <span class="span title-2">$40.00</span>
                    </div>
                    <p class="card-text label-1">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>

                </div>

            </div>
        </li>
        <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-3.png" width="100" height= "100" loading="lazy" alt="Butternut Pumpkin" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="#" class="card-title">Butternut Pumpkin</a>
                        </h3>
                        <span class="span title-2">$10.00</span>
                    </div>
                    <p class="card-text label-1">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
                </div>

            </div>
        </li>
        <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-4.png" width="100" height= "100" loading="lazy" alt="Tokusen Wagyu" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="#" class="card-title">Butternut Pumpkin</a>
                        </h3>
                        <span class="badge label-1">New</span>
                        <span class="span title-2">$39.00</span>
                    </div>
                    <p class="card-text label-1">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                </div>

            </div>
        </li>
        <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-5.png" width="100" height= "100" loading="lazy" alt="Olivas Rellenas" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="#" class="card-title">Olivas Rellenas</a>
                        </h3>
                        <span class="span title-2">$25.00</span>
                    </div>
                    <p class="card-text label-1">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.</p>
                </div>

            </div>
        </li>
        <li>
            <div class="menu-card hover:card">
                <figure class="card-banner img-holder" style="--width: 100; height: 100;">
                    <img src="./assets/img/menu-6.png" width="100" height= "100" loading="lazy" alt="Opu Fish" class="img-cover">
                </figure>

                <div>
                    <div class="title-wrapper">
                        <h3 class="title-3">
                            <a href="#" class="card-title">Opu Fish</a>
                        </h3>
                        <span class="span title-2">$49.00</span>
                    </div>
                    <p class="card-text label-1">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                </div>

            </div>
        </li> */}