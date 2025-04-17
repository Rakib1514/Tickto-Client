import { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/SmallCard.jsx';

const PopularNow = () => {
  const [events, setEvents] = useState([]);

  //
  // fetch data from events collection with
  // desanding(wrong spelling go brrrrrrrr) order
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 4)));
  }, []);

  return (
    <div className="mx-auto my-28 w-[96%] max-w-screen-2xl">
      <h1 className="text-4xl font-bold">Popular Now</h1>
      <p className="py-6 md:w-[90%] lg:w-[70%]">
        Discover the hottest events that everyone is talking about! These top-selling experiences
        have captured the attention of thousands, selling out fast. Whether it's a thrilling
        concert, an electrifying sports match, or an unforgettable theater show, these events are in
        high demand.
      </p>
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

export default PopularNow;
