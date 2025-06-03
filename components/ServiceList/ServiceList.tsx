import './ServiceList.css';
import { ServiceCard } from '../components';

const ServiceList = () => {
    return (
        <ul className="grid-list">
            <ServiceCard
                cardNumber={1}
                cardTitle='Breakfast'
            />
            <ServiceCard
                cardNumber={2}
                cardTitle='Appetizers'
            />
            <ServiceCard
                cardNumber={3}
                cardTitle='Drinks'
            />
        </ul>
    )
}

export default ServiceList;
