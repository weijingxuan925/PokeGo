import { FeatureItem } from '../components';

const FeatureList = () => {
    return (
        <ul className="grid-list">
            <FeatureItem
                cardNumber={1}
                cardTitle='Hygienic Food'
                cardDescription='Impeccable food quality, guaranteed safety, and freshness at all times.'
            />
            <FeatureItem
                cardNumber={2}
                cardTitle='Fresh Environment'
                cardDescription='Inviting ambiance, fostering a fresh and vibrant dining experience.'
            />
            <FeatureItem
                cardNumber={3}
                cardTitle='Skilled Chefs'
                cardDescription='Masterful chefs crafting culinary delights with precision and expertise.'
            />
            <FeatureItem
                cardNumber={4}
                cardTitle='Event & Party'
                cardDescription='Perfect venue for unforgettable events and lively celebrations.'
            />
        </ul>
    )
}

export default FeatureList;

