import React from 'react';
import BusTicketSearch from '../bus-ticket-search/BusTicketSearch';

const Banner = () => {
  return (
    <div className='w-full mt-28 relative'>
      <div className="h-[40vh] w-full">
        <img src="https://i.ibb.co.com/SXXrP05N/tickto-hero.jpg" alt="" className='h-full w-full object-cover'/>
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-28'>
        <BusTicketSearch/>
      </div>
    </div>
  );
};

export default Banner;