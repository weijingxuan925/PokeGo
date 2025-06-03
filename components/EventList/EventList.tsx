import React from 'react'
import { EventCard } from '../components';

const EventList = () => {
    return (
        <ul className="grid-list">
            <EventCard
                cardNumber={1}
                cardTitle='Food, Flavour'
                cardDate='15/09/2024'
                cardDescription='Flavour so good you will try to eat with your eyes.'
            />
            <EventCard
                cardNumber={2}
                cardTitle='Healthy Food'
                cardDate='08/04/2024'
                cardDescription='An enriching event celebrating wellness with delectable, nourishing, and wholesome cuisine.'
            />
            {/*<EventCard*/}
            {/*    cardNumber={3}*/}
            {/*    cardTitle='Recipie'*/}
            {/*    cardDate='03/02/2024'*/}
            {/*    cardDescription='A culinary journey exploring diverse flavors and creativity in every recipe.'*/}
            {/*/>*/}
        </ul>
    )
}

export default EventList;


