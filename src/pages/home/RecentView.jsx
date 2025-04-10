import React, { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/SmallCard.jsx';

const RecentView = () => {
  const [events, setEvents] = useState([]);

  //
  // fetch data from recently viewed collection with /:uid
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 4)));
  }, []);

  return (
    <div className="mx-auto my-28 w-[96%] max-w-screen-2xl">
      <h1 className="my-14 text-4xl font-bold">Recently Viewed</h1>
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
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
