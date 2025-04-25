import React, { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/SmallCard.jsx';

const RecentView = () => {
  const [events, setEvents] = useState([]);

  // const [events, setEvents] = useState([])

  // fetch data from recently viewed collection with /:uid 
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 4)));
  }, []);

  return (
    <div className="mx-auto my-28 w-[96%] max-w-screen-2xl">
      <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">

        <h1 className="my-auto text-center text-7xl font-bold">Events Viewed Recently</h1>

        {events?.map((event) => (
          <SmallCard
            key={event.id}
            event={event}
            height={'h-72'}
            titletext={'text-2xl font-bold'}
            space={'bottom-4 left-3'}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentView;
