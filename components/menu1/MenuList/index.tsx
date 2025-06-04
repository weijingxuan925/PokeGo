import React from 'react';
import { MenuCard } from './MenuCard';
import './styles.css';

const MenuList = () => {
  return (
    <ul className="grid-list">
      <MenuCard
        cardNumber={1}
        cardTitle="Taiwanese Beef"
        cardPrice={17.00}
        cardDescription="Tender beef shank slow-cooked to perfection, infused with scallion and fresh cilantro for a rich, comforting flavor."
      />
      <MenuCard
        cardNumber={6}
        cardTitle="SHAKA"
        cardPrice={40.00}
        cardDescription="A bold and flavorful bowl of spicy salmon, grilled eel, masago, and wakame, layered with our fresh poke mix and creamy avocado. Topped with crispy ramen, fried onions, and finished with sweet eel sauce and sesame dressing for a perfect umami balance."
      />
      <MenuCard
        cardNumber={3}
        cardTitle="Miso"
        activeVegetarian={true}
        cardPrice={10.00}
        cardDescription="A delicate miso broth with sweet corn, wood ear mushrooms, and scallions — a soothing vegetarian delight."
      />
      <MenuCard
        cardNumber={5}
        cardTitle="NAMASTE"
        activeVegetarian={true}
        cardPrice={39.00}
        cardDescription="A vibrant vegan medley featuring our signature Dhicken imitation, golden fried tofu, creamy avocado, edamame, beetroot, sautéed shiitake mushrooms, and wakame. Finished with crispy vegetables, dressed in a harmony of poke and sesame sauces."
      />
      <MenuCard
        cardNumber={4}
        cardTitle="Tonkasu"
        cardPrice={25.00}
        cardDescription="Rich and creamy pork bone broth, topped with melt-in-your-mouth chashu pork belly, sweet corn, earthy wood ear mushrooms, scallions, and a drizzle of fragrant black garlic oil."
      />
      <MenuCard
        cardNumber={7}
        cardTitle="HONOLULU"
        cardPrice={22.00}
        cardDescription="Marinated tuna in savory soy sauce, paired with tobiko, avocado, sweet pineapple, and edamame. Finished with crispy tempura, red onions, rice pearls, and a blend of poke sauce, sesame oil, and nori rice for tropical harmony."
      />
    </ul>
  );
};

export { MenuList }; 