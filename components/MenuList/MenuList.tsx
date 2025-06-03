import { MenuCard } from '../components';

const MenuList = () => {
    return (
        <ul className='grid-list'>
            <MenuCard
                cardNumber={1}
                cardTitle='Taiwanese beef'
                // activeSeasonal={true}
                cardPrice={17.00}
                cardDescription='Beef shank, Scallion,Cilantro'
            />
            <MenuCard
                cardNumber={4}
                cardTitle='Lasagne'
                cardPrice={40.00}
                cardDescription='Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.'
            />
            <MenuCard
                cardNumber={3}
                cardTitle='Miso (vg)'
                activeVegetarian={true}
                cardPrice={10.00}
                cardDescription='Roasted butternut pumpkin, tender and sweet, enhanced with irresistible autumnal spices and flavors.'
            />
            <MenuCard
                cardNumber={5}
                cardTitle='Fields With Chard'
                activeNew={true}
                cardPrice={39.00}
                cardDescription='Wholesome medley: Fields with chard, a savory and nutritious culinary delight.'
            />
            <MenuCard
                cardNumber={2}
                cardTitle='Miso (vg)'
                cardPrice={25.00}
                cardDescription='Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.'
            />
            <MenuCard
                cardNumber={6}
                cardTitle='Opu Fish'
                cardPrice={49.00}
                cardDescription='A fusion of flavors from ocean depths to your plate.'
            />
        </ul>
        
    )
}

export default MenuList;
