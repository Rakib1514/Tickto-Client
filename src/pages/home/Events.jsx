import React, { useEffect, useState } from 'react';
import CategorySection from '../../components/Shared/CategorySection';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.reverse().slice(2, 8)));
  }, []);

  return <CategorySection events={events} Title={'Exclusive Gatherings'} />;
};

export default Events;
