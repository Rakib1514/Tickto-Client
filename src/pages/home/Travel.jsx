import React, { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/smallCard';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router';

const Travel = () => {

    const [events, setEvents] = useState([])
  
    useEffect(() => {
      fetch('./event.json')
        .then(res => res.json())
        .then(data => setEvents(data.slice(6, 12  )))
    }, [])

  return (
    <div>
    <div className='max-w-screen-2xl w-[96%] mx-auto my-28'>
      <div className='flex justify-between items-center'>
      <h1 className='text-5xl font-bold my-10'>Easy Commutes</h1>
      <Link className='flex items-center gap-1 text-lg'>Explore more <GrLinkNext /></Link>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
        {
          events?.map(event => <SmallCard key={event.id} event={event} />)
        }
      </div>
    </div>
  </div>
  );
};

export default Travel;