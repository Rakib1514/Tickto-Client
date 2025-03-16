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
      .then(data => setEvents(data))
  }, [])

  console.log(events)
  return (
    <div className='max-w-screen-2xl w-[96%] mx-auto'>
      <h1 className='text-3xl font-bold my-10'>Recently Viewed</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {
          events?.map(event => <SmallCard key={event.id} event={event} />)
        }
      </div>
    </div>
  );
};

export default RecentView;