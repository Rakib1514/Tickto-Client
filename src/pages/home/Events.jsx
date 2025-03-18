import React, { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/smallCard';
import { GrLinkNext } from "react-icons/gr";

const Events = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('./event.json')
      .then(res => res.json())
      .then(data => setEvents(data.reverse().slice(2, 8)))
  }, [])

  return (

    <div>
      <div className='max-w-screen-2xl w-[96%] mx-auto my-28'>
        <div className='flex justify-between items-center'>
        <h1 className='text-5xl font-bold '>Events</h1>
        <p className='flex items-center gap-1 text-lg'>Explore more <GrLinkNext /></p>
        </div>
        <p className="py-4 pb-8 md:w-[90%] lg:w-[70%]">These top-rated tickets are selling fast! Whether it’s an exclusive conference, a must-watch movie, or the perfect travel route, we’ve got the best picks right here. From inspiring business summits to blockbuster premieres and seamless travel options, these are the experiences people love the most. Book now and see why they’re a favorite!</p>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
          {
            events?.map(event => <SmallCard key={event.id} event={event} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Events;