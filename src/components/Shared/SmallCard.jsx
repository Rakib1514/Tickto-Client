import React from 'react';


// 
// this card is for recently viewed and featured section
// 

const SmallCard = ({ event }) => {

    console.log(event)
    const {
        id,
        title,
        image_url,
        category,
        date,
        available_ticket,
        ticket_sold,
        uid,
        rating
    } = event

    return (
        <div className='rounded-2xl'>
            <div className='w-full h-80'>
                <img className='h-full w-full rounded-2xl' src={event?.image_url} alt="" />
            </div>

            <h1>{title}</h1>
        </div>
    );
};

export default SmallCard;