import React, { useDebugValue, useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/smallCard';

const RecentView = () => {

  const [events, setEvents] = useState([])

  // 
  // fetch data from recently viewed collection with /:uid 
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then(res => res.json())
      .then(data => setEvents(data.slice(0, 4)))
  }, [])

  console.log(events)
  return (
    <div className='max-w-screen-2xl w-[96%] mx-auto my-28'>
      <h1 className='md:text-4xl font-bold my-14'>Recently Viewed</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
          events?.map(event => <SmallCard key={event.id} event={event} />)
        }
      </div>
    </div>
  );
};

export default RecentView;